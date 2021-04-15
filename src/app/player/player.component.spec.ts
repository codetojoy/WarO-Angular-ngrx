import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PlayerComponent } from "./player.component";

import { ConfigService } from "../service/config.service";
import { DealerService } from "../service/dealer.service";
import { StrategyService } from "../service/strategy.service";

describe("PlayerComponent", () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerComponent],
      providers: [ConfigService, DealerService, StrategyService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*
  it("should create", () => {
    expect(component).toBeTruthy();
  });
  */
});
