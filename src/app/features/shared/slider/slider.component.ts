import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  span_n = 0;
  n_line = 0;
  works = [
    {
      i : 0,
      image: 'assets/images/sliderpc/delGredal.png',
      title:'Del Gredal',
      url: 'https://www.delgredal.com',
      
      cliente: 'Cinergia Estudio Creativo',
      description: 'Desarrollamos y diseñamos una web institucional que <br> propone <br> una narrativa en línea con el espíritu y la identidad de la <br> marca.',
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
    setInterval(()=>{
      if(this.span_n ==this.works.length-1) {
        this.span_n=0
      }else{
        this.span_n++;
      }
    },6000)
  }


  changeActive(i:number){
    this.span_n= i;
    console.log(this.span_n)
  }

  chevronClick(direction:string){
    if(direction == 'right'){
      console.log(this.span_n)
      console.log(this.works.length)
      if(this.span_n ==this.works.length-1) {
        this.span_n=0
      }else{
        this.span_n++;
      }
      console.log(this.span_n)
    }
    if(direction == 'left'){
      console.log(this.span_n)
      if(this.span_n==0){
        this.span_n = this.works.length-1
      }else{
        this.span_n--;
      }
      console.log(this.span_n)
    }
  }
}
