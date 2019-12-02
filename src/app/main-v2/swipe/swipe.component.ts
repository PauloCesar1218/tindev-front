import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-swipe',
  templateUrl: './swipe.component.html',
  styleUrls: ['./swipe.component.scss'],
})
export class SwipeComponent implements OnInit {

  public devs;
  public loginData;
  public conversations;
  constructor(private service: MainService, private storage: Storage) { }

  ngOnInit() {
    this.getLoginData();
  }

  getDevs() {
    this.service.getDevelopers().subscribe(devs => {
      this.devs = devs;
      console.log(devs);
    });
  }

  getConversations() {
    const user = {
      id_profile: this.loginData.id
    };
    this.service.getConversations(user).subscribe(conversations => {
      this.conversations = conversations;
      console.log(conversations);
    });
  }

  getLoginData() {
    this.storage.get('loginData').then(data => {
      this.loginData = JSON.parse(data);
      this.loginData = this.loginData[0]
      console.log(this.loginData);
      this.getDevs();
      this.getConversations();
    })
  }

}
