import { Injectable } from "@angular/core";
import { expensesData, incomeData } from "../data/financial.data";
import { Observable, of } from "rxjs";
import { ExpenseData } from "../models/financial.model";

@Injectable({
  providedIn: "root",
})
export class FinancialService {
  constructor() {}

  getExpenseData(): Observable<ExpenseData> {
    return of(expensesData);
  }

  getIncomeData(): Observable<ExpenseData> {
    return of(incomeData);
  }
}
