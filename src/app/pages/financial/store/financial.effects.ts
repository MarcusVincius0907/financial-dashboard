import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store, select } from "@ngrx/store";
import { FinancialService } from "../services/financial.service";
import { switchMap, catchError } from "rxjs/operators";
import {
  requestExpenseData,
  requestExpenseDataFailure,
  requestExpenseDataSuccess,
  requestIncomeData,
  requestIncomeDataFailure,
  requestIncomeDataSuccess,
} from "./financial.actions";
import { of } from "rxjs";

@Injectable()
export class FinancialEffects {
  constructor(
    private store$: Store,
    private actions$: Actions,
    private financialService: FinancialService
  ) {}

  getExpenseData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestExpenseData),
      switchMap(() => {
        return this.financialService.getExpenseData().pipe(
          switchMap((response) => {
            return [requestExpenseDataSuccess({ expenseData: response })];
          }),
          catchError((response) =>
            of(
              requestExpenseDataFailure({
                error: "Erro ao tentar buscar despesas",
              })
            )
          )
        );
      })
    )
  );

  getIncomeData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestIncomeData),
      switchMap(() => {
        return this.financialService.getIncomeData().pipe(
          switchMap((response) => {
            return [requestIncomeDataSuccess({ incomeData: response })];
          }),
          catchError((response) =>
            of(
              requestIncomeDataFailure({
                error: "Erro ao tentar buscar despesas",
              })
            )
          )
        );
      })
    )
  );
}
