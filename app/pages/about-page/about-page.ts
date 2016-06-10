import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/about-page/about-page.html'
})
export class AboutPage {
  constructor(private navController: NavController,
					private platform: Platform) {
  }
}
