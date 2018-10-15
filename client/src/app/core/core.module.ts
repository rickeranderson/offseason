import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatDividerModule,
  MatIconModule, MatTooltipModule,
  MatCardModule,
  MatGridListModule
} from '@angular/material';
import { BuildFooterComponent } from './build-footer/build-footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatTooltipModule,
    RouterModule,
    MatCardModule,
    MatGridListModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatDividerModule,
    BuildFooterComponent,
    HeaderComponent,
    MatIconModule,
    MatTooltipModule,
    RouterModule,
    MatCardModule,
    MatGridListModule
  ],
  declarations: [
    BuildFooterComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
