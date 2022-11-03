import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  
  n_line = 0;
  works = [
    {
      i : 0,
      image: 'assets/images/proyecto_efitech.png',
      title:'Sitio web de soluciones para el agro',
      cliente: 'Efitech',
      description: 'Un sitio para facilitar el contacto entre el usuario y la marca, a través de una experiencia de usuario personalizada.',
      caracteristicas:[
        'UX',
        'UI','Wordpress','Blog'
      ]
    },
    {
      i : 1,
      image: 'assets/images/proyecto_arte_pablo.png',
      title:'Mostrá tus obras de artes',
      cliente: 'Cinergia Estudio Creativo',
      description: 'Una plataforma que muestra todas las obras de un artista cordobés, pensada para cargar rápidamente imágenes y videos de alta calidad.',
      caracteristicas:[
        'UX',
        'UI','Wordpress'
      ]
    },
    {
      i : 2,
      image: 'assets/images/proyecto_singulares_cinergia.png',
      title:'Falta',
      cliente: 'Cinergia Estudio Creativo',
      description: 'Un sitio de logística accesible, enfocado en a oferta de servicios y con un formulario inteligente que facilita la cotización.',
      caracteristicas:[
        'UX',
        'UI','Bootstrap','Customizadas','HTML5'
      ]
    },
    {
      i : 3,
      image: 'assets/images/our_works.png',
      title:'Plataforma de soluciones logísticas',
      cliente: 'Logitrader',
      description: 'Un sitio de logística accesible, enfocado en a oferta de servicios y con un formulario inteligente que facilita la cotización.',
      caracteristicas:[
        'UX',
        'UI','Bootstrap','Customizadas', 'HTML5'
      ]
    },
    
    
    {
      i : 4,
      image: 'assets/images/proyecto_andesat.png',
      title:'Falta',
      cliente: 'Cinergia Estudio Creativo',
      description: 'Un sitio de logística accesible, enfocado en a oferta de servicios y con un formulario inteligente que facilita la cotización.',
      caracteristicas:[
        'UX',
        'UI','Customizadas','HTML5', 'Bootstrap'
      ]
    },
  ]

  ngOnInit(): void {
  }

}
