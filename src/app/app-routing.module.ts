import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CanActivateGuard, CanLoadGuard } from './shared/guards';

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
    // canActivate: [CanActivateGuard],
    // canLoad: [CanLoadGuard],
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
  imports: [
    RouterModule.forRoot(routes, {
      // preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
