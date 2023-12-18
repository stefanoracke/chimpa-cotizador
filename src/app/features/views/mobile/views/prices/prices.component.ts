import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { PropuestaService } from 'src/app/core/services/propuesta.service';
import { cargarDatos } from 'src/app/core/store/actions/prices.action';
import { AppState } from 'src/app/core/store/app.reducer';
import { selectAllPropuesta } from 'src/app/core/store/selectors/prices.selector';


@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss'],
})
export class PricesComponent implements OnInit, OnDestroy {
  constructor(private store: Store<AppState>) { }
  timeLeftSeconds: any;
  internal_navigation = 1;
  time = false;
  date: Date = new Date();
  empresa!: any;
  prop: any;
  subs$!: Subscription
  @ViewChild('accordionshow') accordion!: ElementRef<HTMLElement>
  height = 0 
  click = false
  accordionClick() {
    this.click = !this.click
    if (this.height == 0) {
      this.height = this.accordion.nativeElement.scrollHeight
    } else {
      this.height = 0
    }
    this.accordion.nativeElement.style.maxHeight = `${this.height}px`

  }

  activeView = 'Precios'

  title = 'Precio y';
  subtitle = 'Financiación';



  ngOnInit(): void {

    this.subs$ = this.store.select(selectAllPropuesta).subscribe(res => {


      this.empresa = res.clients.business_name;
      let fecha = Date.parse(res.promotions[0]?.updated_at);
      let evento =
        fecha +
        res.promotions[0]?.time_duration * 1000 * 60 * 60 -
        this.date.getTime();
      this.timeLeftSeconds = Math.floor(evento / 1000);
      this.time = this.timeLeftSeconds > 0;

    },error=>{
      this.store.dispatch(cargarDatos({loading:true}))
    }
    )
  }
  ngOnDestroy(): void {
    this.subs$?.unsubscribe()
  }




}
