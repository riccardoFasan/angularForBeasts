import { NgModule } from '@angular/core';

import { SubjectsRoutingModule } from './subjects-routing.module';

import { SubjectCardComponent, SubjectsPageComponent } from './components';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [SubjectCardComponent, SubjectsPageComponent],
  imports: [SharedModule, SubjectsRoutingModule],
})
export class SubjectsModule {}
