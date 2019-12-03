import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';
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
  @ViewChild('dev', {static: false}) dev;
  constructor(private service: MainService, private storage: Storage) { }

  ngOnInit() {
    this.getLoginData();
  }

  getDevs() {
    this.service.getDevelopers(this.loginData.id).subscribe(devs => {
      this.devs = devs.reverse();
      console.log(devs);
    });
  }

  getLoginData() {
    this.storage.get('loginData').then(data => {
      this.loginData = JSON.parse(data);
      this.loginData = this.loginData[0]
      console.log(this.loginData);
      this.getDevs();
      this.findMatches()
    });
  }

  like(dev) {
    this.devs.pop();
    const payload = {
      id_user: this.loginData.id,
      id_user_liked: dev.id
    }
    this.service.likeDeveloper(payload).subscribe(data => {
      console.log(data);
      this.findMatches();
    });
  }

  deslike() {
    this.devs.pop();
  }

  findMatches() {
    console.log('finding new matches for user '+ this.loginData.id + '....');
    
    const user = {
      id_profile: this.loginData.id
    }
    this.service.findMatches(user).subscribe(data => {
      console.log(data);
    })
  }

}
