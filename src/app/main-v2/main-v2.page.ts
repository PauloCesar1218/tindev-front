import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-v2',
  templateUrl: './main-v2.page.html',
  styleUrls: ['./main-v2.page.scss'],
})
export class MainV2Page implements OnInit {

  private opts = {effect: 'slide', slidesPerView: 1.0};

  constructor() { }

  ngOnInit() {
  }

}
