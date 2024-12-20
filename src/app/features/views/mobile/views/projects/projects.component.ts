import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SwipeEvent } from 'ng-swipe';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
      title:'Donde las marcas cobran vida',
      cliente: 'Cinergia',
      description: '',
      caracteristicas:[
        'Bootstrap','Blog','Autoadmin'
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
      title:'Millones de peruanos estarán conectados',
      cliente: 'SATELITE',
      description: '',
      caracteristicas:[
        'Wordpress', 'Onepage'
      ]
    },
  ]
  title = "Nuestros"
  subtitle = "Trabajos"
  constructor() { }

  private swipeCoord?: [number, number];
  private swipeTime?: number;

swipe(e: TouchEvent, when: string): void {
  const coord: [number, number] = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
  const time = new Date().getTime();

  if (when === 'start') {
    this.swipeCoord = coord;
    this.swipeTime = time;
  } else if (when === 'end' && this.swipeCoord && this.swipeTime) {
    const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
    const duration = time - this.swipeTime;

    if (duration < 1000 //
      && Math.abs(direction[0]) > 30 // Long enough
      && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) { // Horizontal enough
        const swipe = direction[0] < 0 ? 'next' : 'previous';
        // Do whatever you want with swipe
        if(swipe == 'next' && this.n_line<=3){
          this.n_line+=1;   
        }else if(swipe == 'next'){
          this.n_line=0
        }
        if(swipe == 'previous' && this.n_line>0){
          this.n_line -=1;
        }else if(swipe == 'previous'){
          this.n_line=4;
        }
    }
  }
}

  onSwipeEnd(event: SwipeEvent  ) {
    
    if(event.direction=='x' && event.distance<-100 && this.n_line<=3){
      this.n_line+=1;    
      
      return
    }else if(event.direction=='x' && event.distance<-100){
      this.n_line=0
      
      return
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
