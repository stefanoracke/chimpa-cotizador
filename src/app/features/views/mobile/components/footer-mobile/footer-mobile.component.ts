import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-footer-mobile',
  templateUrl: './footer-mobile.component.html',
  styleUrls: ['./footer-mobile.component.scss']
})
export class FooterMobileComponent implements OnInit, OnDestroy {
  routeSus$!: Subscription
  id:any
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
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
    this.id = desiredSegment
  }
  ngOnDestroy(): void {
    this.routeSus$.unsubscribe()
  }
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

}
