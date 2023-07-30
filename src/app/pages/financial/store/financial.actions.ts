import { createAction, props } from "@ngrx/store";
import { ExpenseData, IncomeData } from "../models/financial.model";

export enum FinancialActions {
  SET_EXPENSE_DATA = "SET_EXPENSE_DATA",
  SET_INCOME_DATA = "SET_INCOME_DATA",
}

export const setExpenseData = createAction(
  FinancialActions.SET_EXPENSE_DATA,
  props<{ expenseData: ExpenseData }>
);
export const setIncomeData = createAction(
  FinancialActions.SET_INCOME_DATA,
  props<{ incomeData: IncomeData }>
);
