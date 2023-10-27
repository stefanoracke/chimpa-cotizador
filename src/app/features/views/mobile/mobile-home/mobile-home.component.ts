import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { PropuestaService } from 'src/app/core/services/propuesta.service';
import { cargarDatos } from 'src/app/core/store/actions/prices.action';
import { AppState } from 'src/app/core/store/app.reducer';
import { selectAllPropuesta } from 'src/app/core/store/selectors/prices.selector';

@Component({
  selector: 'app-mobile-home',
  templateUrl: './mobile-home.component.html',
  styleUrls: ['./mobile-home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MobileHomeComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private store: Store<AppState>) { }
  propSub$!: Subscription
  public routes = [
    {
      name: "Precios",
      route: "prices",

    },
    {
      name: "Información",
      route: "info",

    },
    {
      name: "Faqs",
      route: "questions",

    },

 

  ]
  timeLeftSeconds: any
  date: Date = new Date();
  services!: any
  prices!: any

  propuesta = true
  pc = true
  time = false
  nameEmpresa!: any
  namePropuesta!: any
  carga = true;

  redirectTo(ruta: string) {

    let nuevaruta = localStorage.getItem('empresa_url')

    if (ruta == '/') {
      if (nuevaruta)
        this.router.navigateByUrl(nuevaruta);
    } else {
      if (nuevaruta)
        this.router.navigateByUrl(nuevaruta + '/' + ruta)
          .then(() => {
            window.location.reload();

          });
    }


  }

  ngOnInit(): void {

    if (window.innerWidth < 1000) {
      this.pc = false
    }
    this.propSub$ = this.store.select(selectAllPropuesta)
      .subscribe(res => {
        localStorage.setItem('propuesta', JSON.stringify(res))
        this.nameEmpresa = res.clients.business_name
        this.namePropuesta = res.title
        console.log(res)
        this.prices = res.prices.length
        this.services = res.services.length
        let fecha = Date.parse(res.promotions[0]?.updated_at)
        let evento = fecha + res.promotions[0]?.time_duration * 1000 * 60 * 60 - this.date.getTime()
        this.timeLeftSeconds = Math.floor(((evento)) / 1000);
        this.time = this.timeLeftSeconds > 0
    

      },
        ((err) => {
          console.log(err)
        }),
        (() => {
          this.carga = false
        }))
  }

  ngOnDestroy(): void {
    this.propSub$.unsubscribe()
  }

}
