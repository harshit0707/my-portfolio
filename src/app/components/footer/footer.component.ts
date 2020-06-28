import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  iconList: Array<Object>;
  constructor(private _gaservice: GoogleAnalyticsService) { }

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

  sendSocialMediaEvent(socialMediaName: string) {
    this._gaservice.sendEvent('linkClicked', 'Social Media', socialMediaName);
  }

}
