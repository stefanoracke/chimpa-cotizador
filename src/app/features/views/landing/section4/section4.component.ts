import { Component, OnInit } from '@angular/core';
import { PropuestaService } from 'src/app/core/services/propuesta.service';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.scss']
})
export class Section4Component implements OnInit {

  constructor( private propSvc:PropuestaService) { }

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
    this.propSvc.getPropuesta()
    .subscribe((res)=>{
      this.incluido = res.features_type[1].content.map((respuesta:any)=>respuesta.description)
      
    })
  }

}
