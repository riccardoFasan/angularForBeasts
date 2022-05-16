import { NgModule } from '@angular/core';

import { OperatorsRoutingModule } from './operators-routing.module';
import { SharedModule } from '@app/shared/shared.module';

import { TruncatePipe } from './pipes';

import {
  CombinationPageComponent,
  MappingPageComponent,
  OperatorsPageComponent,
  RetryPageComponent,
  SharePageComponent,
  TakePageComponent,
} from './components';

@NgModule({
  declarations: [
    TruncatePipe,
    CombinationPageComponent,
    MappingPageComponent,
    OperatorsPageComponent,
    RetryPageComponent,
    SharePageComponent,
    TakePageComponent,
  ],
  imports: [SharedModule, OperatorsRoutingModule],
})
export class OperatorsModule {}
