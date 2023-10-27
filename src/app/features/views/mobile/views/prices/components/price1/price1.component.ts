import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/core/store/app.reducer';
import { selectActual, selectOptions, selectRegion } from 'src/app/core/store/selectors/prices.selector';

@Component({
  selector: 'app-price1',
  templateUrl: './price1.component.html',
  styleUrls: ['./price1.component.scss']
})
export class Price1Component implements OnInit, OnDestroy {

  options$!: Observable<any>
  actual$!: Subscription
  actual!: number
  region$!: Subscription
  region!: any

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.options$ = this.store.select(selectOptions)
    this.actual$ = this.store.select(selectActual).subscribe(res => this.actual = res)
    this.region$ = this.store.select(selectRegion).subscribe(res => this.region = res)
  }
  ngOnDestroy(): void {
    this.actual$.unsubscribe()
    this.region$.unsubscribe()
  }

}
