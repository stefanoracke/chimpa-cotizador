import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon'; 
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatExpansionModule
  ],
  exports: [
    MatIconModule,
    MatExpansionModule
  ]
})
export class MaterialModule { }


//#36a9e1