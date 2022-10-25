import { Component, OnInit, } from '@angular/core';
import { SwipeEvent } from 'ng-swipe';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

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
  title = "Nuestros"
  subtitle = "Trabajos"
  constructor() { }

  onSwipeMove(event: SwipeEvent) {
    
    
  }
  onSwipeEnd(event: SwipeEvent  ) {
    
    if(event.direction=='x' && event.distance<-200 && this.n_line<=3){
      this.n_line+=1;    
    }else if(event.direction=='x' && event.distance<-200){
      this.n_line=0
    }

    if(event.direction=='x' && event.distance>150 && this.n_line>0){
      this.n_line-= 1;   
    }else{
      this.n_line=4;  
    }
  }

  
  change(i:number){
    this.n_line=i;   
  }

  ngOnInit(): void {
    
    
  }

  

}
