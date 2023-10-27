import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { PropuestaService } from 'src/app/core/services/propuesta.service';
import { AppState } from 'src/app/core/store/app.reducer';
import { selectFaqs } from 'src/app/core/store/selectors/prices.selector';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit,OnDestroy {
  resSub$!:Subscription

  item_number!:number |undefined;
  title="Preguntas"
  subtitle="Frecuentes"

  questions!:Array<any>

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.resSub$ = this.store.select(selectFaqs).subscribe( res =>{

      console.log(res)
      this.questions = res
    }
    )
    
  }
  ngOnDestroy(): void {
      this.resSub$.unsubscribe()
  }

  open(index:number|undefined){
    if(this.item_number!=index && this.item_number) this.item_number=index;
    else{
      this.item_number=0.2
    }
  }

}
