import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  iconList: Array<Object>;
  constructor() { }

  ngOnInit() {
    this.initializeIcons();
  }

  initializeIcons() {
    this.iconList = [
      { 'fileName': 'facebook-logo', 'alternateName': 'Facebook', 'link': '#' },
      { 'fileName': 'instagram-logo', 'alternateName': 'Instagram', 'link': 'https://www.instagram.com/harshit77_/?hl=en' },
      { 'fileName': 'linkedin-logo', 'alternateName': 'LinkedIn', 'link': 'https://www.linkedin.com/in/harshit-agrawal-2584b2157/' },
      { 'fileName': 'github-logo', 'alternateName': 'Github', 'link': 'https://github.com/harshit0707' },
    ]
  }
}
