import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AppComponent,
  CardWrapperComponent,
  HeaderComponent,
  PageWrapperComponent,
} from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CardWrapperComponent,
    PageWrapperComponent,
    HeaderComponent,
    AppComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    CommonModule,
    RouterModule,
    CardWrapperComponent,
    PageWrapperComponent,
  ],
})
export class SharedModule {}
