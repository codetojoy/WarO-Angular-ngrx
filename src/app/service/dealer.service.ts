import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subject } from "rxjs";
import { Deck } from "../model/deck.model";
import { Card, Hand, Kitty } from "../model/hand.model";
import { Bid, Player, Players } from "../model/player.model";
import { Table } from "../model/table.model";
import { ConfigService } from "../service/config.service";
import * as fromApp from "../store/app.reducer";
import { AuditService } from "./audit.service";

/*
import { Store } from "@ngrx/store";
import * as fromApp from "../store/app.reducer";
*/

@Injectable()
export class DealerService {
  private table: Table;
  tableChanged: Subject<Table> = new Subject<Table>();
  statusChanged: Subject<string> = new Subject<string>();
  numCards: number;
  numCardsInHand: number;
  maxCard: number;
  currentTransparencyMode: boolean;

  constructor(
    private auditService: AuditService,
    private configService: ConfigService,
    private store: Store<fromApp.AppState>
  ) {
    this.store.select("config").subscribe((state) => {
      this.numCards = state.numCards;
      const numPlayers = this.configService.getPlayers().length;
      this.numCardsInHand = this.numCards / (numPlayers + 1);
      this.maxCard = this.numCards;

      if (this.table && this.currentTransparencyMode != state.isTransparentMode) {
        this.table.setTransparencyMode(state.isTransparentMode);
        this.tableChanged.next(this.table);
        this.currentTransparencyMode = state.isTransparentMode;
      }
    });
  }

  private emitTableChanged(): void {
    this.auditService.audit(this.table);
    this.tableChanged.next(this.table);
  }

  newGame() {
    console.log(`TRACER DealerService newGame`);
    // const numCardsInHand: number = this.configService.getNumCardsInHand();

    let deck: Deck = new Deck(this.numCards);
    deck.shuffle();
    let hands: Hand[] = this.dealHands(deck.getCards(), this.numCardsInHand);
    hands.forEach((hand) => console.log(`TRACER hand: ${hand.toString()}`));

    const players = this.configService.getPlayers();
    players.forEach((player) => player.clearStatsForNewGame());
    this.table = this.assignToTable(hands, players);
    this.table.assignPrizeCard();
    this.emitTableChanged();
  }

  assignToTable(hands: Hand[], players: Player[]): Table {
    let kitty: Kitty = null;
    for (let handIndex = 0; handIndex < hands.length; handIndex++) {
      let hand: Hand = hands[handIndex];
      if (handIndex == 0) {
        kitty = hand;
      } else {
        let playerIndex = handIndex - 1;
        players[playerIndex].setHand(hand);
      }
    }

    let table: Table = new Table(kitty, players);
    return table;
  }

  // TODO: test
  dealHands(cards: Card[], numCardsInHand: number): Hand[] {
    let hands: Hand[] = [];

    for (let i: number = 0, j: number = cards.length; i < j; i += numCardsInHand) {
      let cardsForHand: Card[] = cards.slice(i, i + numCardsInHand);
      let hand: Hand = new Hand(cardsForHand);
      hands.push(hand);
    }

    return hands;
  }

  playRound(userCard: Card) {
    const user: Player = new Players().findUser(this.table.players);
    // TODO: validate userCard
    // TODO: remove userCard from hand
    const bids: Bid[] = this.getBids(user.name, userCard);
    const winningBid: Bid = this.findWinningBid(bids);
    const roundWinner: Player = winningBid.player;
    this.setStatsForRound(this.table.prizeCard.value, bids, roundWinner);

    if (this.table.kitty.isEmpty()) {
      let gameWinner: Player = new Players().findGameWinner(this.table.players);
      this.statusChanged.next(`Game winner: ${gameWinner.name}`);
      this.table.endGame();
    } else {
      this.table.assignPrizeCard();
      this.statusChanged.next(`Round winner: ${roundWinner.name}! (${this.table.prizeCard.value} points)`);
    }

    this.emitTableChanged();
  }

  setStatsForRound(prizeValue: number, bids: Bid[], winner: Player) {
    bids.forEach((bid) => {
      let player: Player = bid.player;
      if (player.name === winner.name) {
        player.getPlayerStats().addPoints(prizeValue);
        player.getPlayerStats().incNumRoundsWon();
      }
    });
  }

  findWinningBid(bids: Bid[]): Bid {
    return bids.reduce((acc, bid) => {
      let result: Bid = bid;
      if (acc && acc.card.value > bid.card.value) {
        result = acc;
      }
      return result;
    }, null);
  }

  getBids(userName: string, userCard: Card): Bid[] {
    let bids: Bid[] = [];

    this.table.players.forEach((player) => {
      const isUser: boolean = player.name === userName;
      const bid: Bid = this.getBid(player, isUser, userCard);
      bids.push(bid);
      this.table.discardCardForAudit(bid.card);
    });

    return bids;
  }

  getBid(player: Player, isUser: boolean, userCard: Card): Bid {
    let bid: Bid = null;

    if (isUser) {
      bid = player.makeUserBid(userCard);
    } else {
      bid = player.getBid(this.table.getPrizeCard(), this.maxCard);
    }

    return bid;
  }
}
