import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as ConfigActions from "../config/store/config.actions";
import { DealerService } from "../service/dealer.service";
import * as fromApp from "../store/app.reducer";

@Component({
  selector: "app-controlpanel",
  templateUrl: "./controlpanel.component.html",
  styleUrls: ["./controlpanel.component.css"],
})
export class ControlpanelComponent implements OnInit {
  constructor(private store: Store<fromApp.AppState>, private dealerService: DealerService) {}

  ngOnInit(): void {}

  onNewGame(): void {
    console.log(`TRACER ControlPanel: newGame`);
    this.dealerService.newGame();
  }

  onToggleTransparency(): void {
    console.log(`TRACER ControlPanel: ToggleTransparency`);
    // this.configService.toggleTransparency();
    let action = new ConfigActions.ToggleTransparencyMode();
    this.store.dispatch(action);
  }
}
