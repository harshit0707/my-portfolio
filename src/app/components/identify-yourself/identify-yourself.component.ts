import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-identify-yourself',
  templateUrl: './identify-yourself.component.html',
  styleUrls: ['./identify-yourself.component.scss']
})
export class IdentifyYourselfComponent implements OnInit {

  visitorName: string;
  formFilled: boolean;
  addShakeInput: boolean;

  constructor(public dialogRef: MatDialogRef<IdentifyYourselfComponent>) { }

  ngOnInit(): void { }

  closeDialog() {
    this.dialogRef.close(this.visitorName);
  }

  captureUserInfo() {
    if (this.visitorName === null || this.visitorName === undefined || this.visitorName ==='') {
      this.addShakeInput = true;
      setTimeout(()=> {
        this.addShakeInput = false;
      }, 1000);
      return;
    }
    this.formFilled = true;
    setTimeout(() => {
      this.closeDialog();
    }, 1000);
  }
}
