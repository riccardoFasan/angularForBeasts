import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
  UserCardComponent,
} from '@app/components';

import { TruncatePipe } from './pipes';

import { AuthInterceptor, CacheInterceptor } from './interceptors';

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
    UserCardComponent,
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
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   multi: true,
    //   useClass: CacheInterceptor,
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   multi: true,
    //   useClass: AuthInterceptor,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
