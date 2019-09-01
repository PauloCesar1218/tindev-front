import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email;
  password;
  activateButton: boolean;
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.activateButton = false;
  }

  changed() {
    if (!(this.email == null || this.email === '' || this.password == null || this.password === '' || this.password.length < 6 || this.password.length > 12)) {
      this.activateButton = true;
    } else {
      this.activateButton = false;
    }
  }

  goToSwipe() {
    this.navCtrl.navigateForward('/swipe');
  }

}
