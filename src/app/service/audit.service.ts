import { Injectable } from "@angular/core";
import { Table } from "../model/table.model";
import { ConfigService } from "./config.service";

@Injectable()
export class AuditService {
  constructor(private configService: ConfigService) {}

  audit(table: Table): void {
    console.log(`TRACER AS table: ${table.toString()}`);
    let numCards: number = this.configService.getNumCards();
    let expectedSum: number = (numCards * (numCards + 1)) / 2;
    let actualSum: number = table.getDiscardTotalForAudit();

    if (table.getPrizeCard()) {
      actualSum += table.getPrizeCard().value;
    }
    table.players.forEach((player) => {
      actualSum += player.hand.getSumPoints();
      actualSum += player.getPlayerStats().points;
    });
    actualSum += table.kitty.getSumPoints();

    if (actualSum != expectedSum) {
      window.alert(`INTERNAL ERROR expected: ${expectedSum} actual ${actualSum}`);
    } else {
      console.log(`TRACER AuditService audit OK`);
    }
  }
}
