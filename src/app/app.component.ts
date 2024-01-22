import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropuestaService } from './core/services/propuesta.service';
import { Store } from '@ngrx/store';
import { AppState } from './core/store/app.reducer';
import { actionPropuestaTotal, actionRegion, cargarDatos } from './core/store/actions/prices.action';
import { selectAllPropuesta, selectLoading, selectRegion } from './core/store/selectors/prices.selector';
import * as AOS from 'aos'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'chimpa-app';
  pc = true
  loading = true
  _region!:Subscription
  _allPr!:Subscription

  subs1=true
  subs2=true
  constructor(
    private router: Router, 
    private store: Store<AppState>,
    private apiRest: PropuestaService
    ) { }

  getRoute() {
    // Get the current URL
    const currentURL = window.location.href;
    
    // Split the URL by "/" to get the parts
    const parts = currentURL.split("/");

    // Extract the values of "empresa" and "proyecto" based on their positions in the URL
    const newParts = parts[parts.length - 1];

    const newParts2  = newParts.split("_");


    const empresa = newParts2[newParts2.length - 2]; // "Puro-SRL"
    const proyecto = newParts2[newParts2.length - 1]; // "One-Page"

  }

  ngOnInit() {
    AOS.init();
    this.getRoute()
    this.store.dispatch(cargarDatos({loading:true}))
    this._region = this.store.select(selectRegion)
    .subscribe(region=>{
      if(this.subs1 && region){
        this.subs1 = false
        this.apiRest.getDolars()
        .subscribe(dolar=>{
          this.store.dispatch(actionRegion({region: {...region,solidarity_usd:dolar.venta * 1.65}}))
        })
        
      }
    })
    this._allPr = this.store.select(selectAllPropuesta).subscribe((all)=>{
      if(this.subs2 && all){
        this.subs2 = false
        this.apiRest.getDolars()
        .subscribe(dolar=>{
          this.store.dispatch(
            // antes se estaba usando el dolar solidario ahora se usa el dolar tarjeta
            actionPropuestaTotal({propuestaTotal:{...all,solidarity_usd:dolar.venta}}))
            console.log('nueva', {...all,solidarity_usd:dolar.venta})
        })
      }
    })
    this.store.select(selectLoading).subscribe((res)=>this.loading= res)
    if(window.innerWidth<1000){
      this.pc=false
    }

  }
  ngOnDestroy(): void {
      this._region?.unsubscribe()
      this._allPr?.unsubscribe()
  }
}
