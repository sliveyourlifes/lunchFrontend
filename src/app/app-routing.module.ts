import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import {LunchComponent} from './lunch/lunch.component';
import {ProfileComponent} from './profile/profile.component'
import { Route } from '@angular/compiler/src/core';

const routes: Routes = [
    {
      path: '',
      component: ProfileComponent
    },
    {
      path: 'lunch',
      component: LunchComponent
    }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
