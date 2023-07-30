import { Component, Input, OnInit } from "@angular/core";
import { LocalDataSource, ViewCell } from "ng2-smart-table";
import { SmartTableData } from "../../../../@core/data/smart-table";
import { DoneCheckboxComponent } from "../done-checkbox/done-checkbox.component";
import { generateInitialTableConfig } from "../../utils/financial.utils";

@Component({
  selector: "expenses-table",
  templateUrl: "./expenses-table.component.html",
  styleUrls: ["./expenses-table.component.scss"],
})
export class ExpensesTableComponent implements OnInit {
  data = null;
  settings = null;

  ngOnInit(): void {
    const { data, settings } = generateInitialTableConfig();
    this.data = data;
    this.settings = settings;
  }

  constructor() {}
}
