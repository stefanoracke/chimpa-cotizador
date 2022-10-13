import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer-mobile',
  templateUrl: './footer-mobile.component.html',
  styleUrls: ['./footer-mobile.component.scss']
})
export class FooterMobileComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  redirectTo(ruta:string){
    this.router.navigate([ruta]);
    console.log('Hola')
  }

}
