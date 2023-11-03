import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropuestaService } from './core/services/propuesta.service';
import { Store } from '@ngrx/store';
import { AppState } from './core/store/app.reducer';
import { cargarDatos } from './core/store/actions/prices.action';
import { selectLoading } from './core/store/selectors/prices.selector';
import * as AOS from 'aos'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'chimpa-app';
  pc = true
  loading = true

  constructor(private router: Router, private store: Store<AppState>) { }

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
    this.store.select(selectLoading).subscribe((res)=>this.loading= res)
    if(window.innerWidth<1000){
      this.pc=false
    }
  }
}
