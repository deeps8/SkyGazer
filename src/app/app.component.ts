import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit  {

  navigate:any;
  constructor(
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  ngOnInit(): void {
    this.splashScreen.hide();  
  }

  
  

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#0a0a0a');
      //this.splashScreen.show();
    });
  }

  sideMenu() {
    this.navigate =
    [
      {
        title : 'Picture of the Day',
        url   : 'pictureOfDay',
        icon  : '/assets/sgicons/Group 19.svg'
      },
      {
        title : 'NASA Library',
        url   : 'nasagallery',
        icon  : '/assets/sgicons/Group 34.svg'
      },
      {
        title : 'Mars Rover Photos',
        url   : 'marsrover',
        icon  : '/assets/sgicons/Group 31.svg'
      },
      {
        title : 'Earth Imagery',
        url   : 'earthImagery',
        icon  : '/assets/sgicons/Group 21.svg'
      },
      {
        title : 'Mars Weather',
        url   : 'marsweather',
        icon  : '/assets/sgicons/Group 27.svg'
      },
      
      
      
    ];
  }

  goto(url){
    this.router.navigate([url]);
  }

}
