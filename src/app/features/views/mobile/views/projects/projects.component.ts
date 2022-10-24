import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  n_line = 0;
  works = [
    {
      hola:1
    },
    {
      hola:2
    },
    {},
    {
      hola:2
    },
    {
      hola:2
    },
  ]
  title = "Nuestros"
  subtitle = "Trabajos"
  constructor() { }

  ngOnInit(): void {
  }

}
