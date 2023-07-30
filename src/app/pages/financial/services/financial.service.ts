import { Injectable } from "@angular/core";
import { expensesData } from "../data/financial.data";
import { Observable, of } from "rxjs";
import { ExpenseData } from "../models/financial.model";

@Injectable({
  providedIn: "root",
})
export class FinancialService {
  constructor() {}

  getExpense(): Observable<ExpenseData> {
    return of(expensesData);
  }

  getIncome(): Observable<ExpenseData> {
    return of();
  }
}
