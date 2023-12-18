import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { Subscription } from 'rxjs';
import { PropuestaService } from 'src/app/core/services/propuesta.service';


@Component({
  selector: 'app-section8',
  templateUrl: './section8.component.html',
  styleUrls: ['./section8.component.scss']
})
export class Section8Component implements OnInit, OnDestroy {

  constructor( private propSvc:PropuestaService) { }
  title= "Metodología"
  metodologia=1
  methSub$!:Subscription
  @ViewChild("desarrollo2", { read: DragScrollComponent }) ds2!: DragScrollComponent;

  moveRight2() {
    this.ds2.moveRight();
  }

  @ViewChild("desarrollo", { read: DragScrollComponent }) ds!: DragScrollComponent;

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  ngOnInit(): void {
    this.methSub$ = this.propSvc.getPropuesta().subscribe(
      res=>{
        this.metodologia = res.methodology.id
      }
    )
  }
  ngOnDestroy(): void {
    this.methSub$?.unsubscribe()
  }

}
