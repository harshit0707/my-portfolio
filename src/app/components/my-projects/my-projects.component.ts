import { Component, OnInit } from '@angular/core';

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
    this.myProjects = [
      {'title': 'Mosaic Blogging Website', 'description': 'My first project build during college. It\'s all about blogging, blobgging and blogging.'},
      {'title': 'Blockchain Healthcare System', 'description': 'Healthcare system for patients built on ehthereum blockchain for anonymity and immutability.'},
      {'title': 'Online Portfolio', 'description': 'The website which you are on currently!! It is work on progress.'}
    ]
  }

}
