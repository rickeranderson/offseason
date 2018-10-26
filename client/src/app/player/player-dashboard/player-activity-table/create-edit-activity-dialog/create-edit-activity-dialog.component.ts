import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Duration, DurationList } from 'src/app/core/data/time-list';

@Component({
  selector: 'app-create-edit-activity-dialog',
  templateUrl: './create-edit-activity-dialog.component.html',
  styleUrls: ['./create-edit-activity-dialog.component.scss']
})
export class CreateEditActivityDialogComponent implements OnInit {
  durationList: Duration[] = DurationList;

  constructor(public dialogRef: MatDialogRef<CreateEditActivityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    if (this.data.activity.amount > 0) {
      this.dialogRef.close(this.data);
    }
  }

}
