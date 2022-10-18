import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor() { }

  title = "Información"
  internal_navigation=1;

  rutas = [
   {
    name:"Estructura y Funcionalidades",
    number:1
   },
   {
    name: "Servicios",
    number:2
   },
   {
    name:"Características Técnicas",
    number:3
   },
   
  ]

  ngOnInit(): void {
    this.getNavigation()
  }


  getNavigation(){
    let n= localStorage.getItem("navigation_info")
    if(n!=null) this.internal_navigation=parseInt(n)
    console.log(this.internal_navigation)
  }


  navigate(n:number){
    this.internal_navigation = n
    console.log(this.internal_navigation)
    localStorage.setItem("navigation_info", this.internal_navigation.toString())
  }

}
