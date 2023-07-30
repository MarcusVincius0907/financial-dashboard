import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from "@angular/core";
import { DoneCheckboxComponent } from "../done-checkbox/done-checkbox.component";
import { generateInitialTableSettings } from "../../utils/financial.utils";
import { FinancialService } from "../../services/financial.service";
import { Subscription } from "rxjs";
import { Store } from "@ngrx/store";
import { requestIncomeData } from "../../store/financial.actions";
import { selectIncomeData } from "../../store/financial.selectors";

@Component({
  selector: "income-table",
  templateUrl: "./income-table.component.html",
  styleUrls: ["./income-table.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncomeTableComponent implements OnInit, OnDestroy {
  data = null;
  settings = null;

  subscriptions = new Subscription();

  constructor(private store$: Store, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.settings = generateInitialTableSettings();
    this.store$.dispatch(requestIncomeData());

    this.subscriptions.add(
      this.store$.select(selectIncomeData).subscribe((incomeList) => {
        if (incomeList) {
          this.data = incomeList;
          this.cdr.markForCheck();
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
