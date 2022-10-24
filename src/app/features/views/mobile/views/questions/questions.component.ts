import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  item_number!:number;
  title="Preguntas"
  subtitle="Frecuentes"

  questions= [
    '¿Qué dólar toman de referencia?',
    '¿Puedo agregar funciones y/o páginas en un futuro a este sitio web?',
    '¿Puedo modificar mi sitio?',
    '¿Qué es un hosting?',
    '¿Necesito si o si un hosting?',
    '¿Qué es un dominio?'
  ]

  constructor() { }

  ngOnInit(): void {
  }

  open(index:number){
    if(this.item_number!=index) this.item_number=index;
    else{
      this.item_number=0.1
    }
  }

}
