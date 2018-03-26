import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile.service';
import { LunchComponent } from './lunch/lunch.component';
import { LunchListComponent } from './lunch-list/lunch-list.component';
import { LunchListService } from './lunch-list.service';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LunchComponent,
    LunchListComponent
  ],
  imports: [
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
