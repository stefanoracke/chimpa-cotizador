import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PropuestaService } from 'src/app/core/services/propuesta.service';
import { cargarDatos } from 'src/app/core/store/actions/prices.action';
import { AppState } from 'src/app/core/store/app.reducer';


@Component({
  selector: 'app-app-chimpance',
  templateUrl: './app-chimpance.component.html',
  styleUrls: ['./app-chimpance.component.scss']
})
export class AppChimpanceComponent implements OnInit {

  timeLeftSeconds:any
    date: Date = new Date();
  constructor(private propSvc:PropuestaService, private store:Store<AppState>) { }
  services!:any
  prices!:any
 
  propuesta= true
  pc = true
  time = false
 
  stopCarga(bool:boolean){
    this.propuesta = bool
  }

  ngOnInit(): void {

   

    

    if(window.innerWidth<1000){
      this.pc=false
    }
  }

}
