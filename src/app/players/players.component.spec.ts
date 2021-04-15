import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PlayersComponent } from "./players.component";

import { ConfigService } from "../service/config.service";
import { DealerService } from "../service/dealer.service";
import { StrategyService } from "../service/strategy.service";

describe("PlayersComponent", () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayersComponent],
      providers: [ConfigService, DealerService, StrategyService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
