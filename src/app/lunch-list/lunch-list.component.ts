import { Component, OnInit } from '@angular/core';
import { LunchListService } from '../lunch-list.service';

@Component({
  selector: 'app-lunch-list',
  templateUrl: './lunch-list.component.html',
  styleUrls: ['./lunch-list.component.css']
})
export class LunchListComponent implements OnInit {

  lunchDishes: any;

  constructor(private lunchService: LunchListService) {}

  ngOnInit() {
     this.lunchService.getLunch().subscribe(
      data => {
        this.lunchDishes = data;
        console.log(this.lunchDishes)
      },
      err => console.error(err)
     );
  } 
}
