import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Table } from "../model/table.model";
import { DealerService } from "../service/dealer.service";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"],
})
export class GameComponent implements OnInit, OnDestroy {
  status: string = "Click 'New Game' to begin";
  table: Table = new Table();
  tableSubscription: Subscription;
  statusSubscription: Subscription;

  constructor(private dealerService: DealerService) {}

  ngOnInit(): void {
    this.tableSubscription = this.dealerService.tableChanged.subscribe((table) => {
      this.table = table;
    });
    this.statusSubscription = this.dealerService.statusChanged.subscribe((status) => {
      this.status = status;
    });
  }

  ngOnDestroy(): void {
    this.tableSubscription.unsubscribe();
    this.statusSubscription.unsubscribe();
  }
}
