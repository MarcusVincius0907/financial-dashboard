import { Component, OnInit } from "@angular/core";
import { DoneCheckboxComponent } from "../done-checkbox/done-checkbox.component";

@Component({
  selector: "income-table",
  templateUrl: "./income-table.component.html",
  styleUrls: ["./income-table.component.scss"],
})
export class IncomeTableComponent implements OnInit {
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

      description: {
        title: "Description",
        type: "string",
      },
      value: {
        title: "Value",
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
      description: "Salario",
      value: "15,00",
      lastUpdate: "10/10/23",
    },
    {
      id: 0,
      description: "PJ",
      value: "15,00",
      lastUpdate: "10/10/23",
    },
    {
      id: 0,
      description: "Frela",
      value: "15,00",
      lastUpdate: "10/10/23",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
