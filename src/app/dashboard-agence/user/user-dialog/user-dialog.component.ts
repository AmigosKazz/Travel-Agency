import {Component, Inject, Injectable} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent {
  constructor(public dialogRef: MatDialogRef<UserDialogComponent>) {}
    confirm(): void {
      this.dialogRef.close(true);
    }
    cancel(): void {
      this.dialogRef.close(false);
    }

}
