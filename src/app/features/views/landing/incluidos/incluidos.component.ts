import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-incluidos',
  templateUrl: './incluidos.component.html',
  styleUrls: ['./incluidos.component.scss']
})
export class IncluidosComponent implements OnInit {

  constructor() { }

  incluido_object = {
    name:'Incluídos',
    img: 'assets/svg/incluidochimpa.svg',
    listimg: 'assets/svg/ok_yellow.svg'
  }

  no_incluido_object = {
    name:'No incluídos',
    img: 'assets/svg/noincluidochimpa.svg',
    listimg: 'assets/svg/cruz_yellow.svg'
  }

  
  @Input() incluido:boolean = true
  @Input() list!:Array<any>

  ngOnInit(): void {
  }

}
