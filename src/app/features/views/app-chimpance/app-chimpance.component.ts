import { Component, OnInit } from '@angular/core';
import { PropuestaService } from 'src/app/core/services/propuesta.service';

@Component({
  selector: 'app-app-chimpance',
  templateUrl: './app-chimpance.component.html',
  styleUrls: ['./app-chimpance.component.scss']
})
export class AppChimpanceComponent implements OnInit {

  constructor( ) { }

  propuesta= true

  stopCarga(bool:boolean){
    this.propuesta = bool
  }

  ngOnInit(): void {
   


  }

}
