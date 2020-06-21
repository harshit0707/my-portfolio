import { Component, OnInit } from '@angular/core';
import  *  as  data  from  './../../../assets/content/my-projects.json';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
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
