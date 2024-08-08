import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { PropuestaService } from 'src/app/core/services/propuesta.service';
import { AppState } from 'src/app/core/store/app.reducer';
import { selectAllPropuesta } from 'src/app/core/store/selectors/prices.selector';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit, OnDestroy {

  constructor(private store:Store<AppState>) { }

  title = "Información"
  internal_navigation=1;
subs!:Subscription
  estructura!:any
  funcionalidades!:any
  list!:any
  list_incluidos!:any
  list_noincluidos!:any

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
    
       this.subs = this.store.select(selectAllPropuesta).subscribe(res=>{
         this.estructura=res?.features_type[2].content.map((resp:any) => resp.description)
         this.funcionalidades = res?.features_type[3].content.map((resp:any) => resp.description)
         this.list =  res?.features_type[0].content.map((resp:any) => resp.description)
         this.list_incluidos =  res?.features_type[1].content.map((resp:any) => resp.description)
         this.list_noincluidos =  res?.features_type[4].content.map((resp:any) => resp.description)
       })
         
     
  }
ngOnDestroy(): void {
    this.subs?.unsubscribe()
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
