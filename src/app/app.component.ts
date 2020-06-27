import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import * as Rellax from 'rellax';
import { MatDialog } from '@angular/material/dialog';
import { IdentifyYourselfComponent } from './components/identify-yourself/identify-yourself.component';

const POPUP_DELAY_TIME = 3000;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {

  dialogRefSubscription: Subscription;
  routerSubscription: Subscription;
  displayScrollButton = false;
  title = 'my-portfolio';
  rellax: any;

  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit() {
    this.rellax = new Rellax('.rellax');
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
         this.scrollToTop();
      }
    });
    setTimeout(()=> {
      this.showIdentifyYourselfPopup();
    }, POPUP_DELAY_TIME);
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
    this.routerSubscription = null;
    this.dialogRefSubscription.unsubscribe();
    this.dialogRefSubscription = null;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if(document.documentElement.scrollTop > 500) {
      this.displayScrollButton = true;
    } else {
      this.displayScrollButton = false;
    }
  }

  scrollToTop() {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  showIdentifyYourselfPopup() {
    let dialogRef = this.dialog.open(IdentifyYourselfComponent, {
      // height: '200px', width: '600px'
    });
    this.dialogRefSubscription = dialogRef.afterClosed().subscribe(result => {
    });
  }
}
