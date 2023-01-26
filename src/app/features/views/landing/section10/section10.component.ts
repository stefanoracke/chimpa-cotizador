import { Component, OnInit } from '@angular/core';
import { PropuestaService } from 'src/app/core/services/propuesta.service';

@Component({
  selector: 'app-section10',
  templateUrl: './section10.component.html',
  styleUrls: ['./section10.component.scss']
})
export class Section10Component implements OnInit {

  constructor( private faqsService:PropuestaService) { }

  titulo = "Preguntas frecuentes"
  color ="#ffffff"


  

  preguntas!:any

  ngOnInit(): void {
    this.faqsService.getPropuesta().subscribe(res=>this.preguntas = res.faqs)
  }

}
