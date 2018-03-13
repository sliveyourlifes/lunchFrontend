import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile.service';
import { LunchComponent } from './lunch/lunch.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LunchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ 
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
