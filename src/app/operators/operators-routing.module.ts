import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CombinationPageComponent,
  MappingPageComponent,
  OperatorsPageComponent,
  RetryPageComponent,
  SharePageComponent,
  TakePageComponent,
} from './components';

const routes: Routes = [
  {
    path: '',
    component: OperatorsPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'combination',
      },
      {
        path: 'combination',
        component: CombinationPageComponent,
      },
      {
        path: 'mapping',
        component: MappingPageComponent,
      },
      {
        path: 'retry',
        component: RetryPageComponent,
      },
      {
        path: 'share',
        component: SharePageComponent,
      },
      {
        path: 'take',
        component: TakePageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperatorsRoutingModule {}
