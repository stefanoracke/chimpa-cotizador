import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info3',
  templateUrl: './info3.component.html',
  styleUrls: ['./info3.component.scss']
})
export class Info3Component implements OnInit {

  list = [
    'MySQL',
    'Framework: Wordpress',
    'HTML5/CSS/JavaScript',
    'Sitio escalable: no queda obsoleto en el tiempo',
    'Responsive: se adapta a todos los dispositivos móviles',
    'Carga optimizada'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
