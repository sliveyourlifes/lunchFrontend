import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule} from "@angular/router";
import { LunchModule } from './lunch/lunch.module';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile/services/profile.service';
import { DishesComponent } from './dishes/dishes.component';
import { LunchListComponent } from './lunch-list/lunch-list.component';
import { LunchListService } from './lunch-list/services/lunch-list.service';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DishesComponent,
    LunchListComponent,
  ],
  imports: [
    LunchModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ 
    ProfileService,
    LunchListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
