import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RuiqiLiComponent } from './interviews/ruiqi-li.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AllInterviewsPageComponent } from './all-interviews-page/all-interviews-page.component';
import { TipsComponent } from'./tips/tips.component';


export const appRoutes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  { 
    path: 'ruiqi-li',
    component: RuiqiLiComponent
  },
  {
    path: 'all-interviews-page',
    component: AllInterviewsPageComponent
  },
  {
    path: 'tips',
    component: TipsComponent
  },
  {
    path: '**', component: HomePageComponent
  }
];



