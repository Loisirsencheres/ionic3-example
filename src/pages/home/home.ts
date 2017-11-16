import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { LoginPage } from "../login/login";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public fb: Facebook,
              public push: Push) {
    const options: PushOptions = {
      android: {},
      ios: {
        alert: 'true',
        badge: true,
        sound: 'false'
      },
      windows: {}
    };
    const pushObject: PushObject = this.push.init(options);
    this.initPushNotification(pushObject);
  }

  initPushNotification(pushObject: PushObject) {
    this.push.hasPermission().then((res: any) => {
        if (res.isEnabled) {
          console.log('We have permission to send push notifications');
          pushObject.on('registration').subscribe((registration: any) => {
            console.log('Device registered');
            console.log(registration);
          });
          pushObject.on('notification').subscribe((notification: any) => {
            console.log('Received a notification', notification)
          });
          pushObject.on('error').subscribe(error => {
            console.error('Error with Push plugin', error)
          });
        } else {
          console.log('We do not have permission to send push notifications');
        }
      });
  }

  login() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
      .catch(e => console.log('Error logging into Facebook', e));
  }

  loginPage() {
    this.navCtrl.push(LoginPage, {

    });
  }
}
