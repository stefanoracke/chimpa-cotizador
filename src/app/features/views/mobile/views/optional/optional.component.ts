import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PropuestaService } from 'src/app/core/services/propuesta.service';

export interface CardI{
  paragraph: any,
  title:any,
  star: any,
  price: any,
  currency: any,
  interest:any,
  route: any,
  object: {
    title:any,
    paragraph:any,
    image: any,
  }
}

@Component({
  selector: 'app-optional',
  templateUrl: './optional.component.html',
  styleUrls: ['./optional.component.scss']
})
export class OptionalComponent implements OnInit {

  title="Opcionales"

  cards!: any
  paquetes!:any
 lista!:Array<any>
  subscription$!:Subscription
propuesta!:any
  constructor(public router:Router, private propSvc:PropuestaService) { }

  navigateTo(ruta:string, image:string, name:string, description:string){
   
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "title":name,
        "paragraph":description,
        "image":image
        }
  };
    this.router.navigate(['optional/'+ruta], navigationExtras)
    
  }

  ngOnInit(): void {
    let res = this.propSvc.getLocalProp()
      this.propuesta = res
      this.cards = res.services
      this.paquetes = res.prices
      
    
  }
  

}
