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
import { ResourcesComponent } from './resources/resources.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { RuiqiLiComponent } from './interviews/ruiqi-li/ruiqi-li.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    InterviewsComponent,
    AllInterviewsPageComponent,
    ResourcesComponent,
    AboutUsComponent,
    JoinUsComponent,
    RuiqiLiComponent
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
