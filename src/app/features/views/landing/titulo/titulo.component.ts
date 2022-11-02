import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss']
})
export class TituloComponent implements OnInit {

  constructor() { }

  @Input() title:string = "Otras Opciones"
  @Input() color:string = "#36A9E1"

  ngOnInit(): void {
  }

}
