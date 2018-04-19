import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { UpdateOrderComponent } from './pages/update-order/update-order.component';
import { LunchApiService } from './services/lunch-api.service';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule
  ],
  declarations: [
    CreateOrderComponent,
    UpdateOrderComponent,
    MenuComponent
  ],
  providers: [LunchApiService],
  bootstrap: []
})
export class LunchModule { }
