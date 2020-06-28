import { Component, OnInit, Input } from '@angular/core';
import  *  as  data  from  './../../../assets/content/my-projects.json';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss'],
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
export class MyProjectsComponent implements OnInit {

  @Input('focusProjects') inFocus: boolean;
  myProjects: Array<Object>;

  constructor(private _gaservice: GoogleAnalyticsService) { }

  ngOnInit(): void {
    this.initializeProjects();
  }

  initializeProjects() {
    this.myProjects = data['projects'];
  }

  sendGitHubEvent(projectTitle: string) {
    this._gaservice.sendEvent('linkClicked', 'Github', projectTitle);
  }
}
