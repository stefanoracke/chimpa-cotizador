import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menuitems',
  templateUrl: './menuitems.component.html',
  styleUrls: ['./menuitems.component.scss']
})
export class MenuitemsComponent implements OnInit {

  constructor() { }
  image = 'assets/images/imagen_ux_ui.png'
  paragraph = 'Más de 70% de las visitas al sitio web son desde celulares. Entonces, ¿por qué no hacemos un diseño exclusivo para estos dispositivos?. Pensamos una estructura y diseño exclusivo para celulares, para hacer de la experiencia del usuario, sublime!<br><br><strong>¿Cuál es la diferencia entre responsive y diseño mobile?</strong><br>El responsive sólo adapta el contenido a cada dispositivo, permitiendo una correcta visualización del mismo. El diseño para celulares no se adapta, se crea de cero, una experiencia 100% mobile. '
  ngOnInit(): void {
  }

}
