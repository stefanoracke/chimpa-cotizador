import { Component, OnInit } from '@angular/core';
import { PropuestaService } from 'src/app/core/services/propuesta.service';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss']
})
export class Section3Component implements OnInit {

  constructor(private propSvc:PropuestaService) { }

  n = 0

  funcionalidades:Array<any> =[
    {
      title: 'Sitio web con 4 páginas y 5 secciones cada una.',
      list: []
    },
    {
      title: 'Funcionalidades especificas.',
      list: [
        'Página principal - home', 'Dos páginas secundarias', 'Página de contacto: formulario + botón de whatsapp'
      ]
    },
    {
      title: 'Distintas herramientas para mejorar tu web.',
      list: [
        'Bootstrap', 'Dos páginas secundarias','Bootstrap', 'Dos páginas secundarias','Bootstrap', 'Dos páginas secundarias', 'Página de contacto: formulario + botón de whatsapp'
      ]
    }
  ]



  ngOnInit(): void {
    this.propSvc.getPropuesta()
    .subscribe(res=>{
      
      this.funcionalidades = [{
        title: 'Sitio web con 4 páginas y 5 secciones cada una.',
        list: res.features_type[2].content.map((contenido:any)=>contenido.description)
      },
      {
        title: 'Sitio web con 4 páginas y 5 secciones cada una.',
        list: res.features_type[3].content.map((contenido:any)=>contenido.description)
      },
      
      {
        title: 'Sitio web con 4 páginas y 5 secciones cada una.',
        list: res.features_type[0].content.map((contenido:any)=>contenido.description)
      },
    ]
      
    })
  }

}
