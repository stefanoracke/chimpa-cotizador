import { Component, OnInit } from '@angular/core';
import { PropuestaService } from 'src/app/core/services/propuesta.service';

@Component({
  selector: 'app-section6',
  templateUrl: './section6.component.html',
  styleUrls: ['./section6.component.scss']
})
export class Section6Component implements OnInit {

  links!:Array<any>

  constructor(private propuestaSvc:PropuestaService) { }

  ngOnInit(): void {
    this.propuestaSvc.getPropuesta()
    .subscribe(res=>{
      this.links = res
    })
  }

}
