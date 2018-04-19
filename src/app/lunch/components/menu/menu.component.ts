import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dish } from '../../models/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() dishes;
  @Input() selectedDishes;
  @Output() change = new EventEmitter;
  @Output() save = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  getSelecedCount() {
    return this.dishes.reduce((c, d) => {
      console.log(d.selected);
      return c += d.selected;
    }, 0)
  }

  changes($event, dish: Dish) {
    $event.stopPropagation();
    dish.selected = $event.target.checked;
    const selectedCount = this.getSelecedCount();
    console.log(selectedCount,'selectedCount');
  
    this.dishes.forEach(dish => {
      dish.selected || (dish.disabled = (selectedCount == 4));
    });


    console.log(dish.selected)
    console.log('click', $event, dish);
    this.change.emit(dish);
  }

  saves($event) {
    console.log('submit', $event);
    $event.preventDefault();
    this.save.emit($event);
  };

  toggle(dish) {
    dish.selected = !dish.selected;
  }

}
