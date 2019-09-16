import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MainPage } from './main.page';
import { SwipePage } from './swipe/swipe.page';
import { SettingsPage } from './settings/settings.page';
import { MatchesPage } from './matches/matches.page';


const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'swipe',
        // loadChildren: '../swipe/swipe.module#SwipePageModule',
        component: SwipePage
      },
      {
        path: 'config',
        // loadChildren: '../settings/settings.module#SettingsPageModule',
        component: SettingsPage
      },
      {
        path: 'matches',
        // loadChildren: '../matches/matches.module#MatchesPageModule',
        component: MatchesPage
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainPage, MatchesPage, SettingsPage, SwipePage]
})
export class MainPageModule {}
