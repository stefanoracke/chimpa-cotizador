import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PropuestaService } from 'src/app/core/services/propuesta.service';

@Component({
  selector: 'app-mobile-home',
  templateUrl: './mobile-home.component.html',
  styleUrls: ['./mobile-home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MobileHomeComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private propSvc:PropuestaService) { }
  propSub$!:Subscription
  public routes=[
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

  redirectTo(ruta:string){
    
    this.router.navigate([localStorage.getItem('empresa_url'),ruta])
    .then(() => {
      window.location.reload();
      
    });  
  }

  ngOnInit(): void {
    this.propSub$ = this.propSvc.getPropuesta()
    .subscribe(res=>{
      if(res.services.length>0){
        this.routes =[
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
            name: "Opcionales",
            route: "optional",
        
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
    this.propSub$.unsubscribe()
  }

}
