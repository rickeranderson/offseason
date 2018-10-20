import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-create-edit-dialog',
  templateUrl: './create-edit-dialog.component.html',
  styleUrls: ['./create-edit-dialog.component.scss']
})
export class CreateEditDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateEditDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    if (this.data.player.firstName && this.data.player.firstName !== '' && this.data.player.lastName && this.data.player.lastName !== '') {
      this.dialogRef.close(this.data);
    }
  }

}
