import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from "@angular/core";
import { generateInitialTableSettings } from "../../utils/financial.utils";
import { Store } from "@ngrx/store";
import { requestExpenseData } from "../../store/financial.actions";
import { selectExpenseData } from "../../store/financial.selectors";
import { Subscription } from "rxjs";

@Component({
  selector: "expenses-table",
  templateUrl: "./expenses-table.component.html",
  styleUrls: ["./expenses-table.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpensesTableComponent implements OnInit, OnDestroy {
  data = null;
  settings = null;

  subscriptions = new Subscription();

  constructor(private store$: Store, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.settings = generateInitialTableSettings();
    this.store$.dispatch(requestExpenseData());

    this.subscriptions.add(
      this.store$.select(selectExpenseData).subscribe((expenseList) => {
        console.log(expenseList);
        if (expenseList) {
          this.data = expenseList;
          this.cdr.markForCheck();
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
