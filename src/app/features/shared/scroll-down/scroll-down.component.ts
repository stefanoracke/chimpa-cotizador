import { Component, Input } from '@angular/core';

@Component({
    selector: 'chimpa-scroll-down',
    template: `
   <div id="animationscroll" class="position-relative">
       <div class="chevron"></div>
       <div class="chevron"></div>
       <div class="chevron"></div>
       <span class="text">{{text}}</span>
    </div>
  `,
    styleUrls: ['./scroll-down.component.scss'],
    standalone: true
})
export class ScrollDownComponent {
    @Input() text: string = "Scroll down"


}