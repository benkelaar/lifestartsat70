import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'creative', loadChildren: () => import('./creative/creative.module').then(m => m.CreativeModule) },
  { path: 'active', loadChildren: () => import('./active/active.module').then(m => m.ActiveModule) },
  { path: 'social', loadChildren: () => import('./social/social.module').then(m => m.SocialModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
