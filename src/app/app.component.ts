import { Component, ViewChild} from '@angular/core';
import { Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { Deeplinks } from '@ionic-native/deeplinks';
import { LoginPage } from "../pages/login/login";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  public rootPage: any;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public deeplinks: Deeplinks) {

    platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.initRootPage();
      this.initDeepLinking();
    });
  }

  initRootPage() {
    this.rootPage = HomePage;
  }

  initDeepLinking() {
    this.deeplinks.route({
      '/home': HomePage,
      '/login': LoginPage
    }).subscribe((match) => {
      // match.$route - the route we matched, which is the matched entry from the arguments to route()
      // match.$args - the args passed in the link
      // match.$link - the full link data
      console.log('Successfully matched route', match);
      this.nav.setRoot(match.$route, {
      })
    }, (nomatch) => {
      // nomatch.$link - the full link data
      console.error('Got a deeplink that didn\'t match', nomatch);
    });
  }
}

