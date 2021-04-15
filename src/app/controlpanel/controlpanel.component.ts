import { Component, OnInit } from "@angular/core";

import { ConfigService } from "../service/config.service";
import { DealerService } from "../service/dealer.service";

@Component({
  selector: "app-controlpanel",
  templateUrl: "./controlpanel.component.html",
  styleUrls: ["./controlpanel.component.css"],
})
export class ControlpanelComponent implements OnInit {
  constructor(private configService: ConfigService, private dealerService: DealerService) {}

  ngOnInit(): void {}

  onNewGame(): void {
    console.log(`TRACER ControlPanel: newGame`);
    this.dealerService.newGame();
  }

  onToggleTransparency(): void {
    console.log(`TRACER ControlPanel: ToggleTransparency`);
    this.configService.toggleTransparency();
  }
}
