import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  AngularFireAuthGuardModule,
  redirectLoggedInTo,
  canActivate
} from '@angular/fire/auth-guard';

const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

import { ExamplePageComponent } from './example-page/example-page.component';

const routes: Routes = [
  {
    path: '',
    component: ExamplePageComponent,
    ...canActivate(redirectLoggedInToHome)
  }
];

@NgModule({
  imports: [AngularFireAuthGuardModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
