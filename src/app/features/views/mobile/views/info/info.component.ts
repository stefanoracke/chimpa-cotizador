import { Component, OnInit } from '@angular/core';
import { PropuestaService } from 'src/app/core/services/propuesta.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(private propSvc:PropuestaService) { }

  title = "Información"
  internal_navigation=1;

  estructura!:any
  funcionalidades!:any
  list!:any
  list_incluidos!:any

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
    this.propSvc.getPropuesta().subscribe(
      res=>{
         console.log(res.features_type.filter((item:any)=>{item.name == 'Funcionalidades'}))
         console.log(res.features_type.filter((item:any)=>{item.name == 'Estructura'}))
         console.log(res.features_type)
         this.estructura=res.features_type[2].content.map((resp:any) => resp.description)
         this.funcionalidades = res.features_type[3].content.map((resp:any) => resp.description)
         this.list =  res.features_type[0].content.map((resp:any) => resp.description)
         this.list_incluidos =  res.features_type[1].content.map((resp:any) => resp.description)
      }
    )
  }


  getNavigation(){
    let n= localStorage.getItem("navigation_info")
    if(n!=null) this.internal_navigation=parseInt(n)
    
  }


  navigate(n:number){
    this.internal_navigation = n
   
    localStorage.setItem("navigation_info", this.internal_navigation.toString())
  }

}
