import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((module) => module.HomeModule),
  },
  {
    path: 'operators',
    // canActivate: [OperatorsGuard],
    loadChildren: () =>
      import('./operators/operators.module').then(
        (module) => module.OperatorsModule
      ),
  },
  {
    path: 'subjects',
    loadChildren: () =>
      import('./subjects/subjects.module').then(
        (module) => module.SubjectsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
