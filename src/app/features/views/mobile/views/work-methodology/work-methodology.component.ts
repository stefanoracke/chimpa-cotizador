import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-methodology',
  templateUrl: './work-methodology.component.html',
  styleUrls: ['./work-methodology.component.scss']
})
export class WorkMethodologyComponent implements OnInit {

  title= "Metodología"
  subtitle = "De Trabajo"
  constructor() { }

  ngOnInit(): void {
  }

}
