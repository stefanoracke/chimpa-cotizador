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
      url: 'https://singulares.com/',
      
      cliente: '  Cinergia Producciones',
      description: 'Singulares es una empresa líder en soluciones de recursos humanos y coaching para empresas en Chile y en todo el mundo. Con el objetivo de mostrar su innovación y trayectoria, decidieron desarrollar un nuevo sitio web que reflejara su nuevo branding. El resultado es una página web moderna y atractiva, con un toque innovador que transmite el espíritu de la empresa. Además, cuenta con un blog autoadministrable y varias interacciones que mejoran la experiencia del usuario.',
      caracteristicas:[
        'UX',
        'UI','Customizadas','Bootstrap'
      ]
    },
    {
      i : 1,
      image: 'assets/images/sliderspc/gustavoSpada.jpg',
      title:'Gustavo Spada',
      url: 'https://gusespada.com/',
      cliente: '  Cinergia Producciones',
      description: 'Gustavo Espada, un profesor y director de coros, nos presentó el desafío de crear una plataforma de contenido de suscripción para satisfacer sus necesidades. Esta plataforma ofrece una amplia biblioteca de arreglos corales y consejos sobre dirección coral a usuarios de todo el mundo. Los usuarios pueden acceder a estos recursos mediante una suscripción mensual que se renueva automáticamente. Además, se integraron diferentes opciones de pago para facilitar el proceso de suscripción. Gustavo tiene la capacidad de gestionar la plataforma y comunicarse con los usuarios, lo que permite la creación, modificación y eliminación de cursos y partituras. Actualmente, cientos de directores de coro de todo el mundo utilizan arreglos a través de la plataforma <strong>gusespada.com</strong>.',
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
      description: 'Rentauto es una empresa de alquiler de autos, y servicios de movilidad en toda Argentina.<br><br> Inglobe nos buscó para desarrollar un sitio web que sea accesible en diferentes idiomas y monedas para sus clientes.<br><br>Diseñamos una plataforma minimalista y fácil de navegar, sintetizando toda la dinámica de las consultas en un solo lugar. El sistema contempla un administrador donde los usuarios pueden gestionar los autos, precios, puntos de retiro y devolución; y hacer reservas pagando por la plataforma sin tener que contactar a un representante. <br><br> Ahora Rentauto puede ofrecer sus servicios de alquier de autos para cualquier usuario.',
      
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

  setintervalHandle!:any

  ngOnInit(): void {
    this.setintervalHandle= setInterval(()=>this.intervalChange(),4000)
  }

  intervalChange():void{
    if(this.span_n ==this.works.length-1) {
      this.span_n=0
    }else{
      this.span_n++;
    }
  }

  stopInterval(){

    clearInterval(this.setintervalHandle)
  }

  playInterval(){
 
    this.setintervalHandle= setInterval(()=>this.intervalChange(),4000)
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
