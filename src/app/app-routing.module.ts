import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InterviewsComponent } from './interviews/interviews.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AllInterviewsPageComponent } from './all-interviews-page/all-interviews-page.component';
import { TipsComponent } from'./tips/tips.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { JoinUsComponent } from './join-us/join-us.component';

export const appRoutes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  { 
    path: 'interviews/:id',
    component: InterviewsComponent
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
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'join-us',
    component: JoinUsComponent
  },
  {
    path: '**', component: HomePageComponent
  }
];



