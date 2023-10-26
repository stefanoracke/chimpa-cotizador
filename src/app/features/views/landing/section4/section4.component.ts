import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PropuestaService } from 'src/app/core/services/propuesta.service';
import { AppState } from 'src/app/core/store/app.reducer';
import { Observable } from 'rxjs'
import { selectIncludes, selectNotIncludes } from 'src/app/core/store/selectors/prices.selector';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.scss']
})
export class Section4Component implements OnInit {

  constructor(private propSvc: PropuestaService, private store: Store<AppState>) { }
  includes$!: Observable<any>
  not_includes$!: Observable<any>

  ngOnInit(): void {
    this.includes$ = this.store.select(selectIncludes)
    this.not_includes$ = this.store.select(selectNotIncludes)
   
  }

}
