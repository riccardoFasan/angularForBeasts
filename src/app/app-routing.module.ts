import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CombinationPageComponent,
  HomePageComponent,
  MappingPageComponent,
  OperatorsPageComponent,
  RetryPageComponent,
  SharePageComponent,
  SubjectsPageComponent,
  TakePageComponent,
} from './pages';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'operators',
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
  {
    path: 'subjects',
    component: SubjectsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
