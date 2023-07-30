import { ExpenseData, IncomeData } from "../models/financial.model";
import { createReducer, on } from "@ngrx/store";
import { setExpenseData, setIncomeData } from "./financial.actions";

interface FinancialState {
  expenseData: ExpenseData;
  incomeData: IncomeData;
}

export const financialReducer = createReducer<FinancialState>(
  {
    expenseData: null,
    incomeData: null,
  },
  on(setExpenseData, (state, action): FinancialState => {
    return { ...state, expenseData: action._p.expenseData };
  }),
  on(setIncomeData, (state, action): FinancialState => {
    return { ...state, expenseData: action._p.incomeData };
  })
);
