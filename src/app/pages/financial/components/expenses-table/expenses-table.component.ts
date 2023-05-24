import { Component, Input, OnInit } from "@angular/core";
import { LocalDataSource, ViewCell } from "ng2-smart-table";
import { SmartTableData } from "../../../../@core/data/smart-table";

@Component({
  selector: "expenses-table",
  templateUrl: "./expenses-table.component.html",
  styleUrls: ["./expenses-table.component.scss"],
})
export class ExpensesTableComponent implements OnInit {
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
      checkItem: {
        title: "Checkbox title",
        type: "custom",
        renderComponent: CheckboxComponent,
      },
      description: {
        title: "Description",
        type: "string",
      },
      value: {
        title: "Value",
        type: "string",
      },
      date: {
        title: "Date",
        type: "string",
      },
    },
    pager: {
      perPage: 5,
    },
  };

  ngOnInit(): void {}

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
    const data = [
      {
        id: 1,
        checkItem: "item",
        description: "Aluguel",
        value: "1.500,00",
        date: "10",
      },
      {
        id: 2,
        checkItem: "item",
        description: "Netflix",
        value: "50,00",
        date: "15",
      },
      {
        id: 3,
        checkItem: "item",
        description: "Luz",
        value: "100,00",
        date: "8",
      },
    ];
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}

@Component({
  template: ` <input type="checkbox" name="" id="" /> `,
})
export class CheckboxComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }
}
