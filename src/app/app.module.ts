import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import * as $ from 'jquery';

import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app-routing.module';

import { InterviewsComponent } from './interviews/interviews.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AllInterviewsPageComponent } from './all-interviews-page/all-interviews-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    InterviewsComponent,
    AllInterviewsPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'enabled' }),
    AngularFontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
