import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit{

  routerSubscription: Subscription;
  displayScrollButton = false;
  title = 'my-portfolio';
  rellax: any;

  constructor(private router: Router) {
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
         this.scrollToTop();
      }
   });
  }

  ngOnInit() {
    this.rellax = new Rellax('.rellax');
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
    this.routerSubscription = null;
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
}
