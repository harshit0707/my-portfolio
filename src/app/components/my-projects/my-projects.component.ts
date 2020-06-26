import { Component, OnInit } from '@angular/core';
import  *  as  data  from  './../../../assets/content/my-projects.json';
import { trigger, transition, query, stagger, style, animate } from '@angular/animations';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss'],
  animations: [
    trigger('elementAnimation', [
      transition('*=>*', [
        query(
          ':enter',
          stagger(75, [
            style({transform: 'translateY(10%)', opacity: 0}),
            animate(
              '1s ease-in-out',
              style({transform: 'translateY(0%)', opacity: 1})
            )
          ]),
          {optional: true}
        )
      ])
    ])
  ]
})
export class MyProjectsComponent implements OnInit {

  myProjects: Array<Object>;
  constructor() { }

  ngOnInit(): void {
    this.initializeProjects();
  }

  initializeProjects() {
    this.myProjects = data['projects'];
  }

}
