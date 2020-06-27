import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
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
export class AboutMeComponent implements OnInit {

  @Input('focusAboutMe') inFocus: boolean;
  
  constructor() { }

  ngOnInit(): void { }

}
