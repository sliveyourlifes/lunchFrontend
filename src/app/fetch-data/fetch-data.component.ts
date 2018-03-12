import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})

export class FetchDataComponent implements OnInit {
  constructor(private _fetchDataService: FetchDataService) { }

  users: object; 
  
  ngOnInit() {
     this._fetchDataService.getUsers().subscribe(
      data => {
        this.users = Array.of(data);
        console.log(Array.of(data))
      },
      err => console.error(err)
     );
  }
}
