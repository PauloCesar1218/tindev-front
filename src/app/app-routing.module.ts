import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'my-phone', loadChildren: () => import('./my-phone/my-phone.module').then( h => h.MyPhonePageModule)},
  { path: 'login', loadChildren: () => import('./login/login.module').then( l => l.LoginPageModule)},
  { path: 'main', loadChildren: () => import('./swipe/main.module').then( m => m.MainPageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
