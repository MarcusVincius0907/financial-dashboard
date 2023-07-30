import { ExpenseData, IncomeData } from "../models/financial.model";
import { Action, createReducer, on } from "@ngrx/store";
import {
  requestExpenseDataSuccess,
  requestIncomeDataSuccess,
} from "./financial.actions";

export interface FinancialState {
  expenseDataList: ExpenseData;
  incomeDataList: IncomeData;
}

export const financialStateKey = "financialState";

export const reducer = createReducer<FinancialState>(
  {
    expenseDataList: [],
    incomeDataList: [],
  },
  on(requestIncomeDataSuccess, (state, action): FinancialState => {
    return { ...state, incomeDataList: action.incomeData };
  }),
  on(requestExpenseDataSuccess, (state, action): FinancialState => {
    return { ...state, expenseDataList: action.expenseData };
  })
);

export function financialReducer(
  state: FinancialState | undefined,
  action: Action
): FinancialState {
  return reducer(state, action);
}
