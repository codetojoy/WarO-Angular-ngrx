import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AuditService } from "../service/audit.service";
import { ConfigService } from "../service/config.service";
import { DealerService } from "../service/dealer.service";
import { StrategyService } from "../service/strategy.service";

import { ControlpanelComponent } from "./controlpanel.component";

describe("ControlpanelComponent", () => {
  let component: ControlpanelComponent;
  let fixture: ComponentFixture<ControlpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControlpanelComponent],
      providers: [AuditService, ConfigService, DealerService, StrategyService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
