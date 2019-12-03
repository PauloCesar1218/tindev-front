import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
})
export class MatchesComponent implements OnInit {
  
  private loginData;
  public conversations;
  public opts = {effect: 'slide', slidesPerView: 4.1, spaceBetween: 20, freeMode: true};

  constructor(private service: MainService, private storage: Storage) { }


  ngOnInit() {
    this.getLoginData();
  }

  getLoginData() {
    this.storage.get('loginData').then(data => {
      this.loginData = JSON.parse(data);
      this.loginData = this.loginData[0]
      console.log(this.loginData);
      this.getConversations();
    });
  }

  getConversations() {
    console.log(this.loginData);
    
    const user = {
      id_profile: this.loginData.id
    };
    this.service.getConversations(user).subscribe(conversations => {
      this.conversations = conversations;
      this.conversations.qttMatches = `Search ${this.conversations.matches.length + this.conversations.conversations.length} matches`;
      console.log(conversations);
    });
  }

}
