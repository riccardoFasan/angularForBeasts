import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {
  OperatorsPageComponent,
  SubjectsPageComponent,
  CombinationPageComponent,
  MappingPageComponent,
  RetryPageComponent,
  TakePageComponent,
  SharePageComponent,
  HomePageComponent,
  CardComponent,
  HeaderComponent,
  PageContentComponent,
} from '@app/components';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    CardComponent,

    OperatorsPageComponent,
    SubjectsPageComponent,
    HomePageComponent,
    CombinationPageComponent,
    MappingPageComponent,
    RetryPageComponent,
    TakePageComponent,
    SharePageComponent,

    PageContentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
