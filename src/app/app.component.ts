import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropuestaService } from './core/services/propuesta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'chimpa-app';


  constructor(private router:Router){}

  ngOnInit(){
    
  }
}
