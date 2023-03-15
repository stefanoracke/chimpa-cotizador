import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatExpansionModule,
    MatTableModule,
    ClipboardModule,
    MatTooltipModule,
    MatDialogModule,
  ],
  exports: [
    MatIconModule,
    MatTableModule,
    MatExpansionModule,
    ClipboardModule,
    MatTooltipModule,
    MatDialogModule,
  ],
})
export class MaterialModule {}

//#36a9e1
