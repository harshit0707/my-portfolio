import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    trigger('elementAnimation', [
      state('initial', style({
        transform: 'translateY(10%)', opacity: 0
      })),
      state('final', style({
        transform: 'translateY(0%)', opacity: 1
      })),
      transition('initial => final', [
        animate('1s ease-in-out')
      ])
    ])
  ]
})
export class HomePageComponent implements OnInit {

  inFocus: boolean;
  focusAboutMe: boolean;
  focusProjects: boolean;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.inFocus = true;
    }, 500);
  }

  scrollToElement(elementId: string) {
    document.getElementById(elementId).scrollIntoView({
      behavior: "smooth", block: "start", inline: "nearest" });
  }

  downloadResume() {
    // window.open("./../../../assets/documents/Harshit Agrawal.pdf", '_blank');
    let link = document.createElement('a');
    link.href = './../../../assets/documents/Harshit Agrawal.pdf';
    link.download = 'Harshit Agrawal.pdf';
    link.dispatchEvent(new MouseEvent('click'));
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (document.documentElement.scrollTop > 400) {
      this.focusAboutMe = true;
    }
    if (document.documentElement.scrollTop > 700) {
      this.focusProjects = true;
    }
  }
}
