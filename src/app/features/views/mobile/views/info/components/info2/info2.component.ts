import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info2',
  templateUrl: './info2.component.html',
  styleUrls: ['./info2.component.scss']
})
export class Info2Component implements OnInit {


  list = [
    'Página principal',
    'Dos páginas secundarias',
    'Página de contacto formulario + botón de whatsapp'
  ]

  color = 'white'

  constructor() { }

  ngOnInit(): void {
  }

}
