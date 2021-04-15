import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Player } from "src/app/model/player.model";
import { NextCard } from "src/app/model/strategy.model";

import { PlayerConfigItemComponent } from "./player-config-item.component";

describe("PlayerConfigItemComponent", () => {
  let component: PlayerConfigItemComponent;
  let fixture: ComponentFixture<PlayerConfigItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerConfigItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerConfigItemComponent);
    component = fixture.componentInstance;
    component.player = new Player("EVH", new NextCard(), false);
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
