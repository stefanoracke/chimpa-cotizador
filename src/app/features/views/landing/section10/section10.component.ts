import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section10',
  templateUrl: './section10.component.html',
  styleUrls: ['./section10.component.scss']
})
export class Section10Component implements OnInit {

  constructor() { }

  titulo = "Preguntas frecuentes"
  color ="#ffffff"


  preguntas = [
    {
      pregunta:'¿Pregunta frecuente número 1?',
      answer: 'Praesent quam libero, semper ut sagittis at, rutrum ut dui. Quisque id dapibus libero, ac interdum quam. Quisque tempus ante eu neque sodales efficitur. Mauris a tortor elementum, molestie purus ac, eleifend diam. Morbi at purus fringilla, scelerisque nisl et, dapibus odio. Etiam commodo condimentum mi suscipit blandit. Ut cursus augue non auctor tincidunt. Phasellus porta rhoncus massa, et iaculis neque hendrerit et. In feugiat, odio vel ornare sodales, odio dolor lacinia ex, et condimentum odio quam et neque. Duis metus purus, dapibus id sodales eu, hendrerit eget elit. Integer dapibus nec sem at fringilla. Aenean blandit dui ut pretium pellentesque. Aliquam vulputate libero non aliquam tristique. Fusce ac vulputate nisl, at '
    },
    {
      pregunta:'¿Pregunta frecuente número 2?',
      answer: 'Praesent quam libero, semper ut sagittis at, rutrum ut dui. Quisque id dapibus libero, ac interdum quam. Quisque tempus ante eu neque sodales efficitur. Mauris a tortor elementum, molestie purus ac, eleifend diam. Morbi at purus fringilla, scelerisque nisl et, dapibus odio. Etiam commodo condimentum mi suscipit blandit. Ut cursus augue non auctor tincidunt. Phasellus porta rhoncus massa, et iaculis neque hendrerit et. In feugiat, odio vel ornare sodales, odio dolor lacinia ex, et condimentum odio quam et neque. Duis metus purus, dapibus id sodales eu, hendrerit eget elit. Integer dapibus nec sem at fringilla. Aenean blandit dui ut pretium pellentesque. Aliquam vulputate libero non aliquam tristique. Fusce ac vulputate nisl, at '
    },
    {
      pregunta:'¿Pregunta frecuente número 3?',
      answer: 'Praesent quam libero, semper ut sagittis at, rutrum ut dui. Quisque id dapibus libero, ac interdum quam. Quisque tempus ante eu neque sodales efficitur. Mauris a tortor elementum, molestie purus ac, eleifend diam. Morbi at purus fringilla, scelerisque nisl et, dapibus odio. Etiam commodo condimentum mi suscipit blandit. Ut cursus augue non auctor tincidunt. Phasellus porta rhoncus massa, et iaculis neque hendrerit et. In feugiat, odio vel ornare sodales, odio dolor lacinia ex, et condimentum odio quam et neque. Duis metus purus, dapibus id sodales eu, hendrerit eget elit. Integer dapibus nec sem at fringilla. Aenean blandit dui ut pretium pellentesque. Aliquam vulputate libero non aliquam tristique. Fusce ac vulputate nisl, at '
    },
    {
      pregunta:'¿Pregunta frecuente número 4?',
      answer: 'Praesent quam libero, semper ut sagittis at, rutrum ut dui. Quisque id dapibus libero, ac interdum quam. Quisque tempus ante eu neque sodales efficitur. Mauris a tortor elementum, molestie purus ac, eleifend diam. Morbi at purus fringilla, scelerisque nisl et, dapibus odio. Etiam commodo condimentum mi suscipit blandit. Ut cursus augue non auctor tincidunt. Phasellus porta rhoncus massa, et iaculis neque hendrerit et. In feugiat, odio vel ornare sodales, odio dolor lacinia ex, et condimentum odio quam et neque. Duis metus purus, dapibus id sodales eu, hendrerit eget elit. Integer dapibus nec sem at fringilla. Aenean blandit dui ut pretium pellentesque. Aliquam vulputate libero non aliquam tristique. Fusce ac vulputate nisl, at '
    }
  ]

  ngOnInit(): void {
  }

}
