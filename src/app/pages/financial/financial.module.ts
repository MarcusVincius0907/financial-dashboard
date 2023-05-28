import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FinancialComponent } from "./financial.component";
import { SummaryComponent } from "./components/summary/summary.component";
import { RegisterComponent } from "./components/register/register.component";
import { RouterModule, Routes } from "@angular/router";
import { ExpensesTableComponent } from "./components/expenses-table/expenses-table.component";
import {
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbInputModule,
} from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";

const routes: Routes = [
  {
    path: "summary",
    component: SummaryComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
];

@NgModule({
  declarations: [
    FinancialComponent,
    SummaryComponent,
    RegisterComponent,
    ExpensesTableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NbCardModule,
    Ng2SmartTableModule,
    NbDatepickerModule,
    NbInputModule,
    NbCheckboxModule,
  ],
  exports: [RouterModule],
})
export class FinancialModule {}
