import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RuiqiLiComponent } from './interviews/ruiqi-li.component';
import { HomePageComponent } from './home-page/home-page.component';

export const appRoutes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'interviews',
    component: RuiqiLiComponent
  },
  {
    path: '**', component: HomePageComponent
  }
];



