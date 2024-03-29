export interface FinancialData {
  financialDataList: Array<FinancialDataItem>;
}

export interface FinancialDataItem {
  id: string;
  done?: boolean;
  description: string;
  value: string;
  lastUpdate: string;
}

export type ExpenseData = Array<FinancialDataItem>;
export type IncomeData = Array<FinancialDataItem>;
