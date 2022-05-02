import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  HomePageComponent,
  OperatorsPageComponent,
  SubjectsPageComponent,
} from './pages';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
  },
  {
    path: 'operators',
    component: OperatorsPageComponent,
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
