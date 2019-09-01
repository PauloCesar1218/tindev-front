import { Component, OnInit } from '@angular/core';
import { myPhoneModel } from './my-phone.model';
import { FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-my-phone',
  templateUrl: './my-phone.page.html',
  styleUrls: ['./my-phone.page.scss'],
})
export class MyPhonePage implements OnInit {

  userPhone: FormGroup;
  phone;
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToHome() {
    this.navCtrl.navigateBack('/home');
  }

  goToLogin() {
    this.navCtrl.navigateForward('/login');
  }
  
}
