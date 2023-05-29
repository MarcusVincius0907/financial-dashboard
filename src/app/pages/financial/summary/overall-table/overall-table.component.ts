import { Component, OnInit } from "@angular/core";

@Component({
  selector: "overall-table",
  templateUrl: "./overall-table.component.html",
  styleUrls: ["./overall-table.component.scss"],
})
export class OverallTableComponent implements OnInit {
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: "ID",
        type: "number",
      },
      month: {
        title: "Month",
        type: "string",
      },
      expenses: {
        title: "Expenses",
        type: "string",
      },
      incomes: {
        title: "Incomes",
        type: "string",
      },
      amount: {
        title: "Amount",
        type: "string",
      },
      lastUpdate: {
        title: "Last update",
        type: "string",
      },
    },
    pager: {
      perPage: 5,
    },
  };

  data = [
    {
      id: 0,
      month: "Março",
      expenses: "5.000,00",
      incomes: "10.000,00",
      amount: "50.000,00",
      lastUpdate: "10/10/23",
    },
    {
      id: 0,
      month: "Abril",
      expenses: "5.000,00",
      incomes: "10.000,00",
      amount: "50.000,00",
      lastUpdate: "10/10/23",
    },
    {
      id: 0,
      month: "Maio",
      expenses: "5.000,00",
      incomes: "10.000,00",
      amount: "50.000,00",
      lastUpdate: "10/10/23",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
