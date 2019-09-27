import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewsComponent } from './interviews/interviews.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AllInterviewsPageComponent } from './all-interviews-page/all-interviews-page.component';


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
    path: 'all-interviews-page',
    component: AllInterviewsPageComponent
  },
  {
    path: '**', component: HomePageComponent
  }
];



