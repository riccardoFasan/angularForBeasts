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
  CardWrapperComponent,
  HeaderComponent,
  PageWrapperComponent,
  SubjectCardComponent,
} from '@app/components';

import { TruncatePipe } from './pipes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardWrapperComponent,
    OperatorsPageComponent,
    SubjectsPageComponent,
    HomePageComponent,
    CombinationPageComponent,
    MappingPageComponent,
    RetryPageComponent,
    TakePageComponent,
    SharePageComponent,
    PageWrapperComponent,
    TruncatePipe,
    SubjectCardComponent,
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
