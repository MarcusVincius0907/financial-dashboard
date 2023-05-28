import { Component, Input, OnInit } from "@angular/core";
import { LocalDataSource, ViewCell } from "ng2-smart-table";
import { SmartTableData } from "../../../../@core/data/smart-table";

@Component({
  selector: "expenses-table",
  templateUrl: "./expenses-table.component.html",
  styleUrls: ["./expenses-table.component.scss"],
})
export class ExpensesTableComponent implements OnInit {
  fixedExpense = [
    {
      isDone: true,
      description: "Netflix",
      value: "15,00",
      date: new Date(),
    },
    {
      isDone: true,
      description: "Netflix",
      value: "15,00",
      date: new Date(),
    },
    {
      isDone: true,
      description: "Netflix",
      value: "15,00",
      date: new Date(),
    },
    {
      isDone: true,
      description: "Netflix",
      value: "15,00",
      date: new Date(),
    },
  ];

  variableExpense = [
    {
      isDone: true,
      description: "Cartão de credito",
      value: "15,00",
      date: new Date(),
    },
    {
      isDone: true,
      description: "Cartão de credito",
      value: "15,00",
      date: new Date(),
    },
    {
      isDone: true,
      description: "Cartão de credito",
      value: "15,00",
      date: new Date(),
    },
    {
      isDone: true,
      description: "Cartão de credito",
      value: "15,00",
      date: new Date(),
    },
  ];

  ngOnInit(): void {}

  constructor() {}
}
