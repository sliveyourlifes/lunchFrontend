import { Component, OnInit } from '@angular/core';
import { LunchListService } from '../lunch-list.service'

@Component({
  selector: 'app-lunch-list',
  templateUrl: './lunch-list.component.html',
  styleUrls: ['./lunch-list.component.css']
})
export class LunchListComponent implements OnInit {

  constructor(private lunchService: LunchListService) { }

  lunches: object;
  
  ngOnInit() {
     this.lunchService.getLunch().subscribe(
      data => {
        this.lunches = data;
        console.log(this.lunches);
      },
      err => console.error(err)
     );
  }

}
