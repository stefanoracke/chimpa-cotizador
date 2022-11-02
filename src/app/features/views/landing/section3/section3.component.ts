import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss']
})
export class Section3Component implements OnInit {

  constructor() { }

  n = 0

  funcionalidades = [
    {
      title: 'Sitio web con 4 páginas y 5 secciones cada una.',
      list: [
        'Página principal - home', 'Dos páginas secundarias', 'Página de contacto: formulario + botón de whatsapp'
      ]
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
  }

}
