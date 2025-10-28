import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../app/shared/shared-module';
import { AppRoutingModule } from './app-routing-module';

import { App } from './app';
import { HomeComponent } from './pages/home/home';
import { BookDetail } from './pages/book-detail/book-detail';
import { About } from './pages/about/about';
import { NotFound } from './pages/not-found/not-found';
import { BookCardComponent } from './components/book-card/book-card';


@NgModule({
  declarations: [
    App,
    HomeComponent,
    BookDetail,
    About,
    NotFound,
    BookCardComponent,
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
