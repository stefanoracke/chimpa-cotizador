import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-home',
  templateUrl: './mobile-home.component.html',
  styleUrls: ['./mobile-home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MobileHomeComponent implements OnInit {

  constructor(private router: Router) { }

  public routes=[
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

  redirectTo(ruta:string){
    
    this.router.navigate([localStorage.getItem('empresa_url'),ruta])
    .then(() => {
      window.location.reload();
      
    });  
  }

  ngOnInit(): void {
  }

}
