import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  title = "Nuestros"
  subtitle = "Trabajos"
  constructor() { }

  ngOnInit(): void {
  }

}
