import { Component, Input, OnInit } from "@angular/core";

import { ConfigService } from "../service/config.service";
import { Player } from "../model/player.model";

@Component({
  selector: "app-config",
  templateUrl: "./config.component.html",
  styleUrls: ["./config.component.css"],
})
export class ConfigComponent implements OnInit {
  @Input() numCards: number;
  players: Player[];
  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.numCards = this.configService.getNumCards();
    this.players = this.configService.getPlayers();
  }

  onSave(): void {
    console.log(`TRACER CC onSave() ${this.numCards}`);
    this.configService.setNumCards(this.numCards);
  }
}
