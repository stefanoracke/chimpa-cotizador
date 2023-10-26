import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { addAmpliar, quuitarAmpliar, setActualPrice } from 'src/app/core/store/actions/prices.action';
import { AppState } from 'src/app/core/store/app.reducer';
import { selectAdded, selectAmentarPropuesta, selectClient, selectRegion, selectactalPrice } from 'src/app/core/store/selectors/prices.selector';

@Component({
  selector: 'app-ampliar-propuesta',
  templateUrl: './ampliar-propuesta.component.html',
  styleUrls: ['./ampliar-propuesta.component.scss']
})
export class AmpliarPropuestaComponent implements OnInit, OnDestroy{
  ampliar$?: Observable<any[] | undefined>
  added$?: Subscription
  precioActual$?:Subscription
  precioActual:any
  added?:any
  client$?: Observable<any | undefined>
  region$?: Observable<any | undefined>
  constructor(private store: Store<AppState>) { }

  changePrice(){
    let newPrecio = this.precioActual
      const totalPrice = this.added.reduce((accumulator:any, currentObject:any) => {
        if (currentObject.price !== undefined) {
          return Number(accumulator) + Number(currentObject.price);
        }
        return accumulator;
      }, 0);
      const allPrice = totalPrice + Number(newPrecio.prop_price)
      console.log(allPrice)
      this.store.dispatch(setActualPrice({actualPrice:{...newPrecio, price:allPrice}}))
  }

  dispatchAction(ev:any){
    console.log(this.added.includes(ev))
    if (this.added.includes(ev)) {
      // Item exists in the array, so remove it
      this.added = this.added.filter((item:any) => item !== ev);
      console.log(this.added)
      this.store.dispatch(quuitarAmpliar({ added_service: this.added })); // Dispatch action to update the store
      this.changePrice()
    } else {
      // Item doesn't exist in the array, so add it
      this.added = [...this.added, ev];
      this.store.dispatch(addAmpliar({ added_service: [...this.added] })); // Dispatch action to update the store
      this.changePrice()
    }
  }



  ngOnInit(): void {
    this.added$ = this.store.select(selectAdded).subscribe(res=>this.added = res)
    this.ampliar$ = this.store.select(selectAmentarPropuesta)
    this.precioActual$ = this.store.select(selectactalPrice).subscribe(res=>this.precioActual=res)
    this.client$ = this.store.select(selectClient)
    this.region$ = this.store.select(selectRegion)
  }
  ngOnDestroy(): void {
      this.added$?.unsubscribe()
      this.precioActual$?.unsubscribe()
  }

}
