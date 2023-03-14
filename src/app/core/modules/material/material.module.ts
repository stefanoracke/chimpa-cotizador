import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon'; 
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatExpansionModule,
    MatTableModule,
    ClipboardModule,
    MatTooltipModule,
  ],
  exports: [
    MatIconModule,
    MatTableModule,
    MatExpansionModule,
    ClipboardModule,
    MatTooltipModule,
  ]
})
export class MaterialModule { }


//#36a9e1