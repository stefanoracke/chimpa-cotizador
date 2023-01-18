import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section11',
  templateUrl: './section11.component.html',
  styleUrls: ['./section11.component.scss']
})
export class Section11Component implements OnInit {
  n=  0;
  mostrarContenido = true
  constructor() { }
  title='Testimonios'
  ngOnInit(): void {
    setTimeout(()=>{
      this.mostrarContenido=false
    },5500)
    setInterval(
      ()=>{
        
        this.mostrarContenido = true
        if(this.n == this.testimonios.length-1){
          this.n=0
          }
        else{this.n++
        }

        setTimeout(()=>{
          this.mostrarContenido=false
        },5500)
      },6000
    )
  }

  testimonios = [
    {
      name: 'Guillermo Brandan',
      testimonio: '<p class="mb2">"En Cinergia Estudio Creativo trabajamos hace años con Los Chimpa… un equipo sumamente acertivo, atento a cada detalle, con buena onda y una calidad profesional destacable que busca siempre proponer más allá de lo imaginado. Con ellxs sumamos fuerzas y nos potenciamos en proyectos de todo tipo de magnitudes. Valoramos su actitud permanente de estar actualizadxs con las últimas tendencias y de aceptar desafíos que nos empujan a crecer y superarnos en el vertiginoso mundo de las comunicaciones digital. Garantía de confianza."</p>',
      empresa: 'Cinergia Estudio Creativo',
      image: 'assets/img/avatar6.svg'
    },
    {
      name: 'Luciana Siri',
      testimonio: '<p>"Acompañé al Colegio de Profesionales de la Agrimensura de Santa Fe, como consultora externa. Durante unos meses, tuve el gusto de trabajar junto a Chimpancé en el desarrollo de un nuevo sitio web para la institución.</p><p>Destaco, además, el trabajo de UX que realizó empresa. Encontró la manera de amenizar todos los contenidos planteados y los presentó muy prolijamente a través de Adobe XD.</p>',
      empresa: 'COPA',
       image: 'assets/img/avatar1.svg'
    },
    {
      name: 'Alejandro Ahumanda',
      testimonio: '<p class="mb2">"Trabajamos con Chimpa en varios proyectos digitales que demandaban de una prolijidad y entregas con mucha atención al detalle, estuvieron a la altura y se complementaron con nuestro equipo de diseño a la perfección."</p>',
      empresa: '22 DG',
       image: 'assets/img/avatar6.svg'
    },
    {
      name: 'Florencia Del Villar',
      testimonio: '<p class="mb2">"Positive: Professionalism, Responsiveness</p><p class="mb2">Working with Chimpace Digital was a pleasure. I couldn’t be happier with the turnout. Santiago and his team is very professional and guided us throughout the entire process. They had answers for all the questions I threw their way and just made things happen. I can’t recommend them enough!"</p>',
      empresa: 'De Colores',
       image: 'assets/img/avatar3.svg'
    },
    {
      name: 'Ignacio Graglia',
      testimonio: ' <p class="mb2">"En el Tribunal de Cuentas de la Provincia de Córdoba tuvimos el placer de trabajar con el equipo de Chimpancé Digital. Fue una experiencia profesional, pero al mismo tiempo agradable. Nos acompañaron en el nuevo armado de nuestro sitio web y quedamos muy satisfechos no solo con el producto, sino también con el proceso. Rescato el intercambio permanente, la paciencia, la organización y la atención a los detalles que mostraron en cada una de sus entregas. Sumamente recomendables."</p>',
      empresa: 'Tribunal de Cuentas de la ciudad de Córdoba',
       image: 'assets/img/avatar6.svg'
    },
    {
      name: 'Delfina Globo',
      testimonio: '<p class="mb2">"Tuve el placer de trabajar como Responsable de Comunicaciones del Colegio de Profesionales de la Agrimensura de la Prov. de Santa Fe - Distrito Sur junto a Chimpancé en el proceso de actualización y modernización del sitio web institucional. Son atentos a cada detalle, súper amables y con tremenda energía (siempre están arriba) 🚀 Es un lujo trabajar con semejante equipo de trabajo 🙌 Los recomiendo una y mil veces 💪"</p>',
      empresa: 'COPA',
       image: 'assets/img/avatar5.svg'
    },
    
  ]


}
