import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewsComponent } from './interviews/interviews.component';
import { HomePageComponent } from './home-page/home-page.component';

export const appRoutes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'interviews',
    component: InterviewsComponent
  },
  {
    path: '**', component: HomePageComponent
  }
];



