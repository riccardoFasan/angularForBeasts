import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AppComponent,
  CardWrapperComponent,
  HeaderComponent,
  PageWrapperComponent,
} from './components';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CardWrapperComponent,
    PageWrapperComponent,
    HeaderComponent,
    AppComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    CardWrapperComponent,
    PageWrapperComponent,
  ],
})
export class SharedModule {}
