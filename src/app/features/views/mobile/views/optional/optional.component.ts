import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-optional',
  templateUrl: './optional.component.html',
  styleUrls: ['./optional.component.scss']
})
export class OptionalComponent implements OnInit {

  title="Opcionales"
  cards=[
    {
      paragraph: "Convertí tu sitio web en una APP",
      title:"UX UI Mobile",
      star: true,
      price: 350,
      currency: 'USD',
      interest: 'Me interesa ¿Cómo sería?',
      route: 'ux-ui',
      object: {
        title:"UX UI Mobile",
        paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem modi sint natus laboriosam. Vero doloremque voluptate commodi! Alias delectus beatae quod officiis eius at laborum distinctio eum expedita veniam? Molestiae.",
        image: "./../../../../../../assets/images/imagen_ux_ui.png",
      }
    },
    {
      paragraph: "¿No podes generar el contenido para tu sitio web? Dejanos a nosotros!",
      title:"UX Writing",
      star: false,
      price: 350,
      currency: 'USD',
      interest: 'Me interesa ¿en que consiste?',
      route: 'ux-writing',
      object: {
        title:"UX Writing",
        paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem modi sint natus laboriosam. Vero doloremque voluptate commodi! Alias delectus beatae quod officiis eius at laborum distinctio eum expedita veniam? Molestiae.",
        image: "./../../../../../../assets/images/imagen_ux_ui.png",
      }
    },
    {
      paragraph: "Alojamos tu sitio por vos en Internet",
      title:"Hosting por año",
      star: false,
      price: 350,
      currency: 'USD',
      interest: '¿Qué es un hosting?',
      route: 'hosting',
      object: {
        title:"Hosting por un año",
        paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem modi sint natus laboriosam. Vero doloremque voluptate commodi! Alias delectus beatae quod officiis eius at laborum distinctio eum expedita veniam? Molestiae.",
        image: "./../../../../../../assets/images/imagen_ux_ui.png",
      }
    },
   
  ]

  constructor(public router:Router) { }

  navigateTo(ruta:string, object:any){
   
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "title":object.title,
        "paragraph":object.paragraph,
        "image":object.image
        }
  };
    this.router.navigate(['optional/'+ruta], navigationExtras)
    
  }

  ngOnInit(): void {

  }

}
