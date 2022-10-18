import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info1',
  templateUrl: './info1.component.html',
  styleUrls: ['./info1.component.scss']
})
export class Info1Component implements OnInit {

  constructor() { }


  info_estructura = 'Sitio web con 4 páginas y 5 secciones cada una'
  estructura = [
    'Página principal',
    'Dos páginas secundarias',
    'Página de contacto formulario + botón de whatsapp'
  ]

  funcionalidades = [
    'Mapa de locales',
    'Administrador de slider',
    'Página de contacto formulario + botón de whatsapp',
    'Mapa de locales',
    'Administrador de slider',
    'Página de contacto formulario + botón de whatsapp'
  ]

  ngOnInit(): void {
  }

}
