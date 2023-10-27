import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { PropuestaService } from 'src/app/core/services/propuesta.service';
import { AppState } from 'src/app/core/store/app.reducer';
import { selectActual, selectAdded, selectOptions, selectRegion, selectactalPrice } from 'src/app/core/store/selectors/prices.selector';

@Component({
  selector: 'app-section7',
  templateUrl: './setion7.component.html',
  styleUrls: ['./setion7.component.scss']
})
export class Setion7Component implements OnInit, OnDestroy {

  constructor(private store: Store<AppState>) { }
  actual$!: Subscription
  actualPrice$!: Subscription
  added$!:Subscription
  added!:any[]
  actualPrice!:any
  actual!: number
  options$?: Observable<any>
  region$?: Observable<any>
  ngOnInit(): void {
    this.options$ = this.store.select(selectOptions)
    this.region$ = this.store.select(selectRegion)
    this.actual$ = this.store.select(selectActual).subscribe(res => this.actual = res)
    this.actualPrice$ = this.store.select(selectactalPrice).subscribe(res => this.actualPrice = res)
    this.added$ = this.store.select(selectAdded).subscribe(res=>this.added = res)
  }

  ngOnDestroy(): void {
    this.actual$.unsubscribe()
    this.actualPrice$.unsubscribe()
    this.added$.unsubscribe()
  }



}
