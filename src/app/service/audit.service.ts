import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Table } from "../model/table.model";
import * as fromApp from "../store/app.reducer";

@Injectable()
export class AuditService {
  numCards: number;

  constructor(private store: Store<fromApp.AppState>) {
    this.store.select("config").subscribe((state) => {
      this.numCards = state.numCards;
    });
  }

  audit(table: Table): void {
    console.log(`TRACER AS table: ${table.toString()}`);
    let expectedSum: number = (this.numCards * (this.numCards + 1)) / 2;
    let actualSum: number = table.getDiscardTotalForAudit();

    if (table.getPrizeCard()) {
      actualSum += table.getPrizeCard().value;
    }
    table.players.forEach((player) => {
      actualSum += player.hand.getSumPoints();
      actualSum += player.getPlayerStats().points;
    });
    actualSum += table.kitty.getSumPoints();

    if (actualSum != expectedSum) {
      window.alert(`INTERNAL ERROR expected: ${expectedSum} actual ${actualSum}`);
    } else {
      console.log(`TRACER AuditService audit OK`);
    }
  }
}
