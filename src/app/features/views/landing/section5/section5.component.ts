import { Component, OnInit } from '@angular/core';
import { PropuestaService } from 'src/app/core/services/propuesta.service';

@Component({
  selector: 'app-section5',
  templateUrl: './section5.component.html',
  styleUrls: ['./section5.component.scss']
})
export class Section5Component implements OnInit {

  constructor(private propSvc:PropuestaService) { }

  res:any

  ngOnInit(): void {
    this.propSvc.getPropuesta().subscribe((res)=>{
      this.res=res
    })
  }

}
