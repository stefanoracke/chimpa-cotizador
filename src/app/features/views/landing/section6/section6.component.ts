import { Component, OnInit } from '@angular/core';
import { PropuestaService } from 'src/app/core/services/propuesta.service';

@Component({
  selector: 'app-section6',
  templateUrl: './section6.component.html',
  styleUrls: ['./section6.component.scss']
})
export class Section6Component implements OnInit {

  services!:Array<any>
  n_active:number = 0
  servicio!:any

  constructor(private propuestaSvc:PropuestaService) { }

  ngOnInit(): void {
    this.propuestaSvc.getPropuesta()
    .subscribe(res=>{
      this.services = res.services
      this.servicio = this.services[0]
      console.log(this.services)
    })
  }

  changeActive(index:any){
    this.n_active = index
    this.servicio = this.services[index]
    console.log(index)
  }
}
