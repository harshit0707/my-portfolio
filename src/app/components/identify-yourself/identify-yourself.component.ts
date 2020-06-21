import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

const USER_NAME_PATTERN = /^[A-Za-z]+[\s]*[A-Za-z]*$/;

@Component({
  selector: 'app-identify-yourself',
  templateUrl: './identify-yourself.component.html',
  styleUrls: ['./identify-yourself.component.scss']
})
export class IdentifyYourselfComponent implements OnInit {

  visitorName: string;
  formFilled: boolean;
  validName: boolean;
  addShakeInput: boolean;

  constructor(public dialogRef: MatDialogRef<IdentifyYourselfComponent>) { }

  ngOnInit(): void {
    this.validName = true;
  }

  closeDialog() {
    this.dialogRef.close(this.visitorName);
  }

  captureUserInfo() {
    if (!USER_NAME_PATTERN.test(this.visitorName)) {
    // if (this.visitorName === null || this.visitorName === undefined || this.visitorName ==='') {
      this.addShakeInput = true;
      this.validName = false;
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
