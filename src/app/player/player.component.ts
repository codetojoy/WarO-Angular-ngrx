import { Component, Input, OnInit } from "@angular/core";
import { Player } from "../model/player.model";
import { Card } from "../model/hand.model";

import { DealerService } from "../service/dealer.service";

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"],
})
export class PlayerComponent implements OnInit {
  @Input() player: Player;

  constructor(private dealerService: DealerService) {}

  ngOnInit(): void {}

  onPlayRound(card: Card): void {
    console.log(`TRACER PC.playRound card: ${card.toString()}`);
    this.dealerService.playRound(card);
  }
}
