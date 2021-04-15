import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ConfigComponent } from "./config/config.component";
import { PlayerConfigItemComponent } from "./config/player-config-item/player-config-item.component";
import { ControlpanelComponent } from "./controlpanel/controlpanel.component";
import { GameComponent } from "./game/game.component";
import { PlayerComponent } from "./player/player.component";
import { PlayersComponent } from "./players/players.component";
import { AuditService } from "./service/audit.service";
import { ConfigService } from "./service/config.service";
import { DealerService } from "./service/dealer.service";
import { StrategyService } from "./service/strategy.service";
import { appReducer } from "./store/app.reducer";

const appRoutes: Routes = [
  { path: "", component: GameComponent },
  { path: "config", component: ConfigComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ControlpanelComponent,
    GameComponent,
    PlayerComponent,
    PlayersComponent,
    ConfigComponent,
    PlayerConfigItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    StoreModule.forRoot(appReducer),
  ],
  providers: [AuditService, ConfigService, DealerService, StrategyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
