import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/core/store/app.reducer';
import { selectActual, selectAdded, selectOptions, selectRegion, selectactalPrice } from 'src/app/core/store/selectors/prices.selector';

@Component({
  selector: 'app-price1',
  templateUrl: './price1.component.html',
  styleUrls: ['./price1.component.scss']
})
export class Price1Component implements OnInit, OnDestroy {

  options$!: Observable<any>
  actual$!: Subscription
  actualPrice$!: Subscription
  actualPrice!:any
  added$!:Subscription
  added!:any[]
  actual!: number
  region$!: Subscription
  region!: any

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.options$ = this.store.select(selectOptions)
    this.actual$ = this.store.select(selectActual).subscribe(res => this.actual = res)
    this.region$ = this.store.select(selectRegion).subscribe(res => this.region = res)
    this.added$ =this.store.select(selectAdded).subscribe(res=>this.added = res)
    this.actualPrice$ = this.store.select(selectactalPrice).subscribe(res=>this.actualPrice = res)
  }
  ngOnDestroy(): void {
    this.actual$?.unsubscribe()
    this.actualPrice$?.unsubscribe()
    this.region$?.unsubscribe()
    this.added$?.unsubscribe()
  }

}
