import { createAction, props } from "@ngrx/store";
import { ExpenseData, IncomeData } from "../models/financial.model";

export enum FinancialActions {
  REQUEST_EXPENSE_DATA_SUCCESS = "REQUEST_EXPENSE_DATA_SUCCESS",
  REQUEST_EXPENSE_DATA_FAILURE = "REQUEST_EXPENSE_DATA_FAILURE",
  REQUEST_EXPENSE_DATA = "REQUEST_EXPENSE_DATA",
  REQUEST_INCOME_DATA_SUCCESS = "REQUEST_INCOME_DATA_SUCCESS",
  REQUEST_INCOME_DATA_FAILURE = "REQUEST_INCOME_DATA_FAILURE",
  REQUEST_INCOME_DATA = "REQUEST_INCOME_DATA",
}

export const requestExpenseData = createAction(
  FinancialActions.REQUEST_EXPENSE_DATA
);

export const requestExpenseDataSuccess = createAction(
  FinancialActions.REQUEST_EXPENSE_DATA_SUCCESS,
  props<{ expenseData: ExpenseData }>()
);

export const requestExpenseDataFailure = createAction(
  FinancialActions.REQUEST_EXPENSE_DATA_FAILURE,
  props<{ error: string }>()
);

export const requestIncomeData = createAction(
  FinancialActions.REQUEST_INCOME_DATA
);

export const requestIncomeDataSuccess = createAction(
  FinancialActions.REQUEST_INCOME_DATA_SUCCESS,
  props<{ incomeData: IncomeData }>()
);

export const requestIncomeDataFailure = createAction(
  FinancialActions.REQUEST_INCOME_DATA_SUCCESS,
  props<{ error: string }>()
);
