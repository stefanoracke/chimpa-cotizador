import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.scss']
})
export class Section4Component implements OnInit {

  constructor() { }

  incluido = [
    'Programación y desarrollo',
    'Garantía por un mes',
    'Página  funcinando correctamente',
    'Plantilla',
    'Contrato de trabajo'
  ]
  noincluido = [
    'Producción de fotos y videos',
    'Redacción de textos y traducción',
    'Hosting y dominio',
    'Edición de logo y fotoproducto',
    'Mantenimiento y actualizaciones'
  ]

  ngOnInit(): void {
  }

}
