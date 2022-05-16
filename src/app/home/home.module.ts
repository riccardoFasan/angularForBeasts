import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '@app/shared/shared.module';

import { HomePageComponent, UserCardComponent } from './components';

@NgModule({
  declarations: [UserCardComponent, HomePageComponent],
  imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule {}
