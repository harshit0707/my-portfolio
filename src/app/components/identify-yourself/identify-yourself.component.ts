import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

const USER_NAME_PATTERN = /^[\s]*[A-Za-z]+[\s]*[A-Za-z]*[\s]*$/;
const ANONYMOUS = 'anonymous';

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

  closeDialog(visitorName = ANONYMOUS) {
    this.dialogRef.close(visitorName);
  }

  captureUserInfo() {
    if (this.visitorName === null || this.visitorName === undefined ||
      !USER_NAME_PATTERN.test(this.visitorName)) {
      this.addShakeInput = true;
      this.validName = false;
      setTimeout(()=> {
        this.addShakeInput = false;
      }, 1000);
      return;
    }
    this.formFilled = true;
    setTimeout(() => {
      this.closeDialog(this.visitorName);
    }, 1000);
  }
}
