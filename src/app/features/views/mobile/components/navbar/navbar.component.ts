import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PropuestaService } from 'src/app/core/services/propuesta.service';
import { AppState } from 'src/app/core/store/app.reducer';
import { Store } from '@ngrx/store';
import { selectAllPropuesta } from 'src/app/core/store/selectors/prices.selector';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarMobileComponent implements OnInit {
  propSub$!: Subscription

  public routes = [
    {
      name: "Precios",
      route: "prices"
    },
    {
      name: "Información",
      route: "info"
    },
    {
      name: "Metodología de trabajo",
      route: "methodology"
    },
    {
      name: "Opcionales",
      route: "optional"
    },
    {
      name: "Proyectos",
      route: "projects"
    },

  ]

  @Input() title!: any;
  @Input() subtitle!: any;
  showMenu = false
  showMenuDots = true

  openClose() {
    this.showMenu = !this.showMenu
    this.showMenuDots = !this.showMenuDots
  }



  goBack() {
    const activatedRoute = this.activatedRoute;
    const currentURL = window.location.href;

    const urlSegments = currentURL.split('/');

    // Find and extract the desired segment
    let desiredSegment = '';

    for (const segment of urlSegments) {
      if (segment.includes('_')) {
        desiredSegment = segment;
        break;
      }
    }
    this.router.navigate(['/', desiredSegment])
    // Now you can use activatedRoute to navigate to the previous route
  }

  constructor(private location: Location, private router: Router, private activatedRoute: ActivatedRoute, private store: Store<AppState>) { }



  ngOnInit(): void {
    this.propSub$ = this.store.select(selectAllPropuesta)
      .subscribe(res => {

        if (res.services.length == 0) {
          this.routes = [
            {
              name: "Precios",
              route: "prices",

            },
            {
              name: "Información",
              route: "info",

            },
            {
              name: "Metodología de trabajo",
              route: "methodology",

            },
            {
              name: "Proyectos",
              route: "projects",

            },

          ]
        }
      })
  }

  ngOnDestroy(): void {
    this.propSub$?.unsubscribe()
  }
}
