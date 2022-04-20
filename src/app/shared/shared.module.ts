import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DISPATCHER } from './interfaces/dispatcher.interface';
import { DispatcherModule } from '@app/dispatcher/dispatcher.module';
import { JsonPlaceholderDispatcher } from '@app/dispatcher/services/dispatchers';
import { CardComponent, HeaderComponent } from './components';

@NgModule({
  declarations: [HeaderComponent, CardComponent],
  imports: [CommonModule, DispatcherModule],
  exports: [HeaderComponent, CardComponent],
  providers: [
    {
      provide: DISPATCHER,
      useClass: JsonPlaceholderDispatcher,
    },
  ],
})
export class SharedModule {}
