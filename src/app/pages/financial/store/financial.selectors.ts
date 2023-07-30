import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FinancialState, financialStateKey } from "./financial.reducer";

const selectFinancialSelectorState =
  createFeatureSelector<FinancialState>(financialStateKey);

export const selectExpenseData = createSelector(
  selectFinancialSelectorState,
  (state) => state.expenseDataList
);
export const selectIncomeData = createSelector(
  selectFinancialSelectorState,
  (state) => state.incomeDataList
);
