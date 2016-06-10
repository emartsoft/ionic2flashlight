import {Component} from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';
import {Flashlight} from 'ionic-native';
import {AboutPage} from '../about-page/about-page';

@Component({
  templateUrl: 'build/pages/home-page/home-page.html'
})
export class HomePage {
	
  flashIsON: boolean = false;
  constructor(private nav: NavController,
              private viewCtrl: ViewController) {
  }

  switchOff()
  {
	  if (this.flashIsON==true)
	  {
		  console.log('status:', this.flashIsON);
		  this.flashIsON=false;
		  this.toggleFlashLight() 
	  }
	  else
	  {
		  this.flashIsON=true;
		  this.toggleFlashLight() 
	  }
  }
  toggleFlashLight() {
    if (Flashlight.available)
    {
      console.log('flashlight found');

      Flashlight.toggle().then(function (success) {
          console.log('flashlight light'); /* success */ },
          function (error) {
            console.log('flashlight light error: ', error); /* error */ });
    }
    else 
    {
        alert("Flashlight not available on this device");
    }   
  }
  
  showAboutInfo(){
	  this.nav.push(AboutPage);
  }
  
  dismiss(){
	  this.viewCtrl.dismiss();
  }
}
