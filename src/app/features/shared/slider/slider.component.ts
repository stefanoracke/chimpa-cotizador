import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }
  title = "Proyectos"
  span_n = 0;
  n_line = 0;
  works = [
    {
      i : 0,
      image: 'assets/images/sliderspc/singulares.png',
      title:'Singulares',
      url: 'https://www.delgredal.com',
      
      cliente: '  Cinergia Producciones',
      description: 'Desarrollamos y diseñamos una web institucional que <br> propone <br> una narrativa en línea con el espíritu y la identidad de la <br> marca.',
      caracteristicas:[
        'UX',
        'UI','Customizadas','Bootstrap'
      ]
    },
    {
      i : 1,
      image: 'assets/images/sliderspc/gustavoSpada.jpg',
      title:'Gustavo Spada',
      url: 'https://www.delgredal.com',
      cliente: '  Cinergia Producciones',
      description: 'Una plataforma que muestra todas las obras de un artista cordobés, pensada para cargar rápidamente imágenes y videos de alta calidad.',
      caracteristicas:[
        'UX',
        'UI','Wordpress'
      ]
    },
    {
      i : 2,
      image: 'assets/images/sliderspc/rentauto.jpg',
      title:'Rentauto',
      cliente: 'Cinergia Producciones',
      description: 'Diseñamos una plataforma minimalista y fácil de navegar, sintetizando toda la dinámica de las consultas en un solo lugar. El sistema contempla un administrador donde los usuarios pueden gestionar los autos, precios, puntos de retiro y devolución; y hacer reservas pagando por la plataforma sin tener que contactar a un representante. ',
      
      url:'https://www.rentautoargentina.com.ar/cordoba',
      caracteristicas:[
        'UX',
        'UI','Bootstrap','Customizadas','HTML5'
      ]
    },
    {
      i : 3,
      image: 'assets/images/sliderspc/cinergia.jpg',
      title:'Plataforma de soluciones logísticas',
      cliente: 'Cinergia',
      description: 'Nos enfocamos en mostrar los proyectos de una forma dinámica, y en resaltar el branding del estudio, explotando todos los recursos gráficos y conceptuales. El resultado fue una web totalmente interactiva, con movimiento y animaciones, cuenta con un blog y gestor de proyectos autoadministrable personalizado. Ahora Cinergia puede mostrarse como una marca líder en desarrollo de marca y estudio audiovisual.',
      url:'https://www.cinergiaestudiocreativo.com/',
      caracteristicas:[
        'UX',
        'UI','Bootstrap','Customizadas', 'HTML5'
      ]
    },
    
    
    {
      i : 4,
      image: 'assets/images/sliderspc/copa.jpg',
      title:'Copa',
      cliente: ' Cinergia Producciones',
      description: 'Creamos una plataforma minimalista e interactiva, con una vista exclusiva para celulares. Nos enfocamos en los distintos públicos y la accesibilidad de cada uno. Cuenta con un buscador de profesionales inteligente e interactivo. Las secciones de Blog, Normativas, y Profesionales son totalmente autoadministrable. Ahora el Colegio de Agrimensores cuenta con una imagen renovada e innovadora en Internet.',
      url: 'https://copa.org.ar/',
      caracteristicas:[
        'UX',
        'UI','Customizadas','HTML5', 'Bootstrap'
      ]
    },
    {
      i : 5,
      image: 'assets/images/sliderspc/venturi.jpg',
      title:'Venturi SA',
      cliente: ' Cinergia Producciones',
      description: 'Una plataforma institucional interactiva, en 3 idiomas diferentes, con una nueva estética y experiencia de usuario. Cuenta con un buscador inteligente de productos. Así el visitante puede acceder fácilmente al producto que buscaba sin perderse en un mar de páginas y páginas, ofreciendo una experiencia de usuario excepcional.',
      url: 'https://chimpancedigital.com.ar/venturi/',
      caracteristicas:[
        'UX',
        'UI','Customizadas','HTML5', 'Bootstrap'
      ]
    },
    {
      i : 6,
      image: 'assets/images/sliderspc/xpress.jpg',
      title:'Xpress Rendering',
      cliente: ' Cinergia Producciones',
      description: 'Nos contrataron para darle un giro al diseño de su web, en la que muestran su trabajo y buscan generar leads. Querían un sitio moderno, que comunique el nivel de empresa y que muestre la amplia gama de servicios que ofrecen. Creamos una plataforma con un diseño sofisticado, que guía al visitante por todos los servicios que la empresa ofrece. Además, la web tiene un blog autoadministrable. Hoy, Xpress Rendering cuenta con un sitio sofisticado, a la altura de la competencia, que muestra en detalle todos los servicios que brinda la compañía.',
      
      
      url: 'https://xpressrendering.com/',
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
    
  }

  chevronClick(direction:string){
    if(direction == 'right'){
      
      if(this.span_n ==this.works.length-1) {
        this.span_n=0
      }else{
        this.span_n++;
      }
     
    }
    if(direction == 'left'){
     
      if(this.span_n==0){
        this.span_n = this.works.length-1
      }else{
        this.span_n--;
      }
     
    }
  }
}
