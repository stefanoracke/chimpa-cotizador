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
      name: 'Rodrigo Rodriguez',
      testimonio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut assumenda magnam, in veritatis necessitatibus facilis quia repudiandae. Repellendus, voluptatibus animi vel, quaerat accusantium sunt voluptate fugit, dolorem alias nobis quibusdam.',
      empresa: 'Cinergia'
    },
    {
      name: 'Pablo Rodriguez',
      testimonio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut assumenda magnam, in veritatis necessitatibus facilis quia repudiandae. Repellendus, voluptatibus animi vel, quaerat accusantium sunt voluptate fugit, dolorem alias nobis quibusdam.',
      empresa: 'Costa Esmeralda'
    },
    {
      name: 'Pesadas de España',
      testimonio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut assumenda magnam, in veritatis necessitatibus facilis quia repudiandae. Repellendus, voluptatibus animi vel, quaerat accusantium sunt voluptate fugit, dolorem alias nobis quibusdam.',
      empresa: 'Popatik'
    },
    
  ]


}
