import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { PropuestaService } from 'src/app/core/services/propuesta.service';
import { AppState } from 'src/app/core/store/app.reducer';
import { selectAllPropuesta } from 'src/app/core/store/selectors/prices.selector';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss']
})
export class Section3Component implements OnInit, OnDestroy {

  constructor(private store:Store<AppState>) { }

  n = 0
  subs$!:Subscription
  title:any
  funcionalidades!:Array<any>



  ngOnInit(): void {
    this.subs$ = this.store.select(selectAllPropuesta).subscribe(res=>{
      this.title = res.title_option
      this.funcionalidades = [{
        list: res.features_type[2].content.map((contenido:any)=>contenido.description)
      },
      {
        list: res.features_type[3].content.map((contenido:any)=>contenido.description)
      },
      {
        list: res.features_type[0].content.map((contenido:any)=>contenido.description)
      },
    ]
    })
  
      
      
   
  }
  ngOnDestroy(): void {
      this.subs$?.unsubscribe()
  }

}
