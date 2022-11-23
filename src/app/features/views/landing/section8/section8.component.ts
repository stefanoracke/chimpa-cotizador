import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section8',
  templateUrl: './section8.component.html',
  styleUrls: ['./section8.component.scss']
})
export class Section8Component implements OnInit {

  constructor() { }
  title= "Metodología"
  metodology = [
    {
      name:'BRIEF',
      image: 'assets/images/metodologia/image_0.png'
    },
    {
      name:'UX',
      image: 'assets/images/metodologia/image_1.svg',
      number: 'assets/images/metodologia/number_1.svg'
    },
    {
      name:'UI',
      image: 'assets/images/metodologia/image_2.png',
      number: 'assets/images/metodologia/number_2.svg'
    },
    {
      name:'PROGRAMACION',
      image: 'assets/images/metodologia/image_3.png',
      number: 'assets/images/metodologia/number_3.svg'
    },
    {
      name:'TEST',
      image: 'assets/images/metodologia/image_4.png',
      number: 'assets/images/metodologia/number_4.svg'
    },
    {
      name:'FINAL',
      image: 'assets/images/metodologia/image_5.png',
      number: 'assets/images/metodologia/number_5.svg'
    },
    
  ]

  ngOnInit(): void {
  }

}
