import { Component, OnInit } from '@angular/core';
import { LunchApiService } from '../../services/lunch-api.service'
import { Dish } from '../../models/dish';

@Component({
  selector: 'app-create-order',
  // template: `<app-menu [dishes]="lunchDishes"></app-menu>`,
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  lunchDishes: Dish[];
  arr : Array<object> = [];

  constructor( private lunchApiService: LunchApiService) { 
    
  }

  ngOnInit() {
    this.lunchApiService.getMenu()
      .subscribe(dishes => {this.lunchDishes = dishes
        console.log(this.lunchDishes);
      });
     
  }

  onChanges(dish: Dish) {
    console.log(dish.selected)

  }
  

  onSave() {
    console.log(this.lunchDishes.filter(d => d.selected).map(d => d._id));
    console.log('onsave')
  }

}
