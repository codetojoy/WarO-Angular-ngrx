import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GameComponent } from "./game.component";

import { AuditService } from "../service/audit.service";
import { ConfigService } from "../service/config.service";
import { DealerService } from "../service/dealer.service";
import { StrategyService } from "../service/strategy.service";

describe("GameComponent", () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameComponent],
      providers: [AuditService, ConfigService, DealerService, StrategyService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
