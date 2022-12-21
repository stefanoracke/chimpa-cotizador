import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarMobileComponent implements OnInit {


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
  
  @Input() title!: any;
  @Input() subtitle!: any;
  showMenu = false
  showMenuDots = true

  openClose(){
    this.showMenu=!this.showMenu 
    this.showMenuDots=!this.showMenuDots
  }

  

  goBack(){
    this.location.back();
  }

  constructor(private location:Location, private router:Router) { }

  redirectTo(ruta:string){
    
    this.router.navigate([localStorage.getItem('empresa_url'),ruta])
    .then(() => {
      window.location.reload();
      
    });  
  }
  ngOnInit(): void {
  }

}
