import { Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as ConfigActions from "../config/store/config.actions";
import { Player } from "../model/player.model";
import { ConfigService } from "../service/config.service";
import * as fromApp from "../store/app.reducer";

@Component({
  selector: "app-config",
  templateUrl: "./config.component.html",
  styleUrls: ["./config.component.css"],
})
export class ConfigComponent implements OnInit {
  @Input() numCards: number;
  players: Player[];

  constructor(private configService: ConfigService, private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.store.select("config").subscribe((state) => {
      console.log(`TRACER CC subscription fired`);
      this.numCards = state.numCards;
    });
    this.players = this.configService.getPlayers();
  }

  onSave(): void {
    console.log(`TRACER CC onSave() ${this.numCards}`);
    const action = new ConfigActions.UpdateNumCards(this.numCards);
    this.store.dispatch(action);
    // this.configService.setNumCards(this.numCards);
  }
}
