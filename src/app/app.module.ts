import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { FetchDataService } from './fetch-data.service';


@NgModule({
  declarations: [
    AppComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ FetchDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
