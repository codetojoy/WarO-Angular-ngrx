import { Input, Component, OnInit } from "@angular/core";

import { ConfigService } from "../service/config.service";
import { Player } from "../model/player.model";

@Component({
  selector: "app-players",
  templateUrl: "./players.component.html",
  styleUrls: ["./players.component.css"],
})
export class PlayersComponent implements OnInit {
  @Input() players: Player[] = [];

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.players = this.configService.getPlayers();
  }
}
