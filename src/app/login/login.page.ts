import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoginServiceService } from '../services/login-service.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email;
  password;
  activateButton: boolean;
  constructor(private navCtrl: NavController, private service: LoginServiceService, private storage: Storage) { }

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
    this.navCtrl.navigateForward('/main-v2');
  }

  login() {
    const user = {
      email: this.email,
      password: this.password
    };
    this.service.login(user).subscribe(data => {
      this.storage.set('loginData', JSON.stringify(data));
      this.goToSwipe();
    }, err => {
      console.error(err);
    });
  }

}
