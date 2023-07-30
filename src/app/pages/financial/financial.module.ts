import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FinancialComponent } from "./financial.component";
import { SummaryComponent } from "./summary/summary.component";
import { RegisterComponent } from "./register/register.component";
import { RouterModule, Routes } from "@angular/router";
import { ExpensesTableComponent } from "./register/expenses-table/expenses-table.component";
import {
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbProgressBarModule,
} from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { IncomeTableComponent } from "./register/income-table/income-table.component";
import { InvestmentsTableComponent } from "./register/investments-table/investments-table.component";
import { DoneCheckboxComponent } from "./register/done-checkbox/done-checkbox.component";
import { ResultComponent } from "./register/result/result.component";
import { TopCardToolsComponent } from "./register/top-card-tools/top-card-tools.component";
import { OverallTableComponent } from "./summary/overall-table/overall-table.component";
import { FinancialService } from "./services/financial.service";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { financialReducer, financialStateKey } from "./store/financial.reducer";
import { FinancialEffects } from "./store/financial.effects";

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
    IncomeTableComponent,
    InvestmentsTableComponent,
    DoneCheckboxComponent,
    ResultComponent,
    TopCardToolsComponent,
    OverallTableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NbCardModule,
    Ng2SmartTableModule,
    NbDatepickerModule,
    NbInputModule,
    NbCheckboxModule,
    NbButtonModule,
    NbIconModule,
    NbProgressBarModule,
    StoreModule.forFeature(financialStateKey, financialReducer),
    EffectsModule.forFeature([FinancialEffects]),
  ],
  exports: [RouterModule],
  providers: [FinancialService],
})
export class FinancialModule {}
