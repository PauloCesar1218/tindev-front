import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
})
export class MatchesComponent implements OnInit {
  
  public opts = {effect: 'slide', slidesPerView: 4.1, spaceBetween: 20, freeMode: true};

  constructor() { }

  ngOnInit() {}

}
