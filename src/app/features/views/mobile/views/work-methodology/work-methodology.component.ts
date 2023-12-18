import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { Subscription } from 'rxjs';
import { PropuestaService } from 'src/app/core/services/propuesta.service';

@Component({
  selector: 'app-work-methodology',
  templateUrl: './work-methodology.component.html',
  styleUrls: ['./work-methodology.component.scss']
})
export class WorkMethodologyComponent implements OnInit, OnDestroy {

  title= "Metodología"
  subtitle = "De Trabajo"
  subscription$!:Subscription
  metodologia = 1
  constructor(private propSvc:PropuestaService) { }

  @ViewChild("desarrollo", { read: DragScrollComponent }) ds!: DragScrollComponent;
  @ViewChild("desarrollo2", { read: DragScrollComponent }) ds2!: DragScrollComponent;

  moveRight2() {
    this.ds2.moveRight();
  }

  moveRight() {
    this.ds.moveRight();
  }
  ngOnInit(): void {
    this.subscription$ = this.propSvc.getPropuesta()
    .subscribe(res=>{

      this.metodologia = res.methodology.id
    })
  }
  ngOnDestroy(): void {
    this.subscription$?.unsubscribe()
  }

}
