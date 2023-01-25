import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PropuestaService } from 'src/app/core/services/propuesta.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  resSub$!:Subscription

  item_number!:number |undefined;
  title="Preguntas"
  subtitle="Frecuentes"

  questions!:Array<any>

  constructor(private propSvc:PropuestaService) { }

  ngOnInit(): void {
    this.resSub$ = this.propSvc.getPropuesta()
    .subscribe(res=>{
      console.log(res)
      this.questions= res.faqs
    })
  }

  open(index:number|undefined){
    if(this.item_number!=index && this.item_number) this.item_number=index;
    else{
      this.item_number=0.2
    }
  }

}
