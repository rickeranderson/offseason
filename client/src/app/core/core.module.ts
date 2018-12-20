import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatDividerModule,
  MatIconModule, MatTooltipModule,
  MatCardModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  MatOptionModule,
  MatSelectModule,
  MatExpansionModule,
  MatTabsModule,
  MatTableModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { DeleteDialogComponent } from './shared/delete-dialog/delete-dialog.component';
import { WeeklyBoardComponent } from './weekly-board/weekly-board.component';

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
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    MatOptionModule,
    MatSelectModule,
    HttpClientModule,
    MatExpansionModule,
    MatTabsModule,
    ChartsModule,
    MatTableModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatDividerModule,
    HeaderComponent,
    MatIconModule,
    MatTooltipModule,
    RouterModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    MatOptionModule,
    MatSelectModule,
    HttpClientModule,
    MatExpansionModule,
    MatTabsModule,
    ChartsModule,
    MatTableModule,
    MatDialogModule,
    DeleteDialogComponent,
    MatDatepickerModule,
    MatNativeDateModule,
    WeeklyBoardComponent
  ],
  declarations: [
    HeaderComponent,
    DeleteDialogComponent,
    WeeklyBoardComponent
  ]
})
export class CoreModule { }
