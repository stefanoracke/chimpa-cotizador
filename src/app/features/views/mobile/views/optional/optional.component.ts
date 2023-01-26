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
export class OptionalComponent implements OnInit, OnDestroy {

  title="Opcionales"
  // cards=[
  //   {
  //     paragraph: "Convertí tu sitio web en una APP",
  //     title:"UX UI Mobile",
  //     star: true,
  //     price: 350,
  //     currency: 'USD',
  //     interest: 'Me interesa ¿Cómo sería?',
  //     route: 'option',
  //     object: {
  //       title:"UX UI Mobile",
  //       paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem modi sint natus laboriosam. Vero doloremque voluptate commodi! Alias delectus beatae quod officiis eius at laborum distinctio eum expedita veniam? Molestiae.",
  //       image: "./../../../../../../assets/images/imagen_ux_ui.png",
  //     }
  //   },
  //   {
  //     paragraph: "¿No podes generar el contenido para tu sitio web? Dejanos a nosotros!",
  //     title:"UX Writing",
  //     star: false,
  //     price: 350,
  //     currency: 'USD',
  //     interest: 'Me interesa ¿en que consiste?',
  //     route: 'option',
  //     object: {
  //       title:"UX Writing",
  //       paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem modi sint natus laboriosam. Vero doloremque voluptate commodi! Alias delectus beatae quod officiis eius at laborum distinctio eum expedita veniam? Molestiae.",
  //       image: "./../../../../../../assets/images/imagen_ux_ui.png",
  //     }
  //   },
  //   {
  //     paragraph: "Alojamos tu sitio por vos en Internet",
  //     title:"Hosting por año",
  //     star: false,
  //     price: 350,
  //     currency: 'USD',
  //     interest: '¿Qué es un hosting?',
  //     route: 'option',
  //     object: {
  //       title:"Hosting por un año",
  //       paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem modi sint natus laboriosam. Vero doloremque voluptate commodi! Alias delectus beatae quod officiis eius at laborum distinctio eum expedita veniam? Molestiae.",
  //       image: "./../../../../../../assets/images/imagen_ux_ui.png",
  //     }
  //   },
   
  // ]

  cards!: any
 lista!:Array<any>
  subscription$!:Subscription

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
    this.subscription$= this.propSvc.getPropuesta()
    .subscribe(res=>{

      this.cards = res.services

      
    })
  }
  ngOnDestroy(): void {
    this.subscription$.unsubscribe()
  }

}
