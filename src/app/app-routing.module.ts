import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

import {LunchComponent} from './lunch/lunch.component';
import {ProfileComponent} from './profile/profile.component'
import { LunchListComponent } from './lunch-list/lunch-list.component';


const routes: Routes = [
    {
      path: '',
      component: ProfileComponent
    },
    {
      path: 'lunch',
      component: LunchComponent
    },
    {
      path: 'lunch/orders/:id',
      component: LunchListComponent
    }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
