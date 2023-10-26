import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PropuestaService } from 'src/app/core/services/propuesta.service';
import { AppState } from 'src/app/core/store/app.reducer';
import { selectFaqs } from 'src/app/core/store/selectors/prices.selector';

@Component({
  selector: 'app-faqs-landing',
  templateUrl: './section10.component.html',
  styleUrls: ['./section10.component.scss']
})
export class Section10Component implements OnInit {

  constructor( private faqsService:PropuestaService, private store:Store<AppState>) { }

  titulo = "Preguntas frecuentes"
  color ="#ffffff"

  preguntas$!:Observable<any>


  ngOnInit(): void {
    this.preguntas$ = this.store.select(selectFaqs)
  }

}
