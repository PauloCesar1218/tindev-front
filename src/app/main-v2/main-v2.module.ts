import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MainV2Page } from './main-v2.page';
import { SettingsComponent } from './settings/settings.component';
import { MatchesComponent } from './matches/matches.component';
import { SwipeComponent } from './swipe/swipe.component';

const routes: Routes = [
  {
    path: '',
    component: MainV2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainV2Page, SettingsComponent, MatchesComponent, SwipeComponent]
})
export class MainV2PageModule {}
