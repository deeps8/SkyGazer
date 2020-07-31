import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  navigate:any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.show();
    });
  }

  sideMenu() {
    this.navigate =
    [
      {
        title : 'Picture of the Day',
        url   : 'home/pictureOfDay',
        icon  : '/assets/sgicons/Group 19.svg'
      },
      // {
      //   title : 'Space Weather',
      //   url   : '/spacew',
      //   icon  : 'assets/sgicons/Group 20.svg'
      // },
      {
        title : 'Earth Imagery',
        url   : 'home/earthImagery',
        icon  : '/assets/sgicons/Group 21.svg'
      },
      {
        title : 'Mars Weather',
        url   : '/marsw',
        icon  : '/assets/sgicons/Group 27.svg'
      },
      {
        title : 'Earth Image Polychromatic',
        url   : '/earthp',
        icon  : '/assets/sgicons/Group 28.svg'
      },
      {
        title : 'Mars Rover Photos',
        url   : '/marsr',
        icon  : '/assets/sgicons/Group 31.svg'
      },
      {
        title : 'TechPort Projects',
        url   : '/techport',
        icon  : '/assets/sgicons/Group 32.svg'
      },
      {
        title : 'Moon/Mars Trek WMTS',
        url   : '/trek',
        icon  : '/assets/sgicons/Group 34.svg'
      },

      
    ];
  }
}
