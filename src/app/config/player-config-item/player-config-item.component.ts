import { Component, OnInit, Input } from "@angular/core";

import { Player } from "../../model/player.model";

@Component({
  selector: "app-player-config-item",
  templateUrl: "./player-config-item.component.html",
  styleUrls: ["./player-config-item.component.css"],
})
export class PlayerConfigItemComponent implements OnInit {
  @Input() player: Player;

  constructor() {}

  ngOnInit(): void {}

  onSelect(): void {
    console.log(`TRACER PCIC.onSelect ${this.player.name}`);
  }
}
