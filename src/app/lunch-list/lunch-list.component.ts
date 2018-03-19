import { Component, OnInit } from '@angular/core';
import { LunchListService } from '../lunch-list.service';
// import { Menu } from '../Menu';

@Component({
  selector: 'app-lunch-list',
  templateUrl: './lunch-list.component.html',
  styleUrls: ['./lunch-list.component.css']
})
export class LunchListComponent implements OnInit {

  lunchesData: Object;
  date: string;
  list:Array<object>;
  _id: string;
  // hide: boolean;

  constructor(private lunchService: LunchListService) {
   
  }

 

  ngOnInit() {
     this.lunchService.getLunch().subscribe(
      data => {
        // this.lunchesData = data;
        // console.log(this.lunchesData)
        let currentDate = new Date();
        let shortDate = currentDate.getFullYear()+"-"+("0"+(currentDate.getMonth()+1))+"-"+currentDate.getDate();
        let [ lunchesData ] = data;
        // console.log(this.hide);
        lunchesData.hide = true;
        console.log(lunchesData)
        // console.log(Object.keys(lunchesData).length)
        // console.log(lunchesData.date.includes(shortDate));
        // if(lunchesData.date.includes(shortDate)){
          this.date = shortDate;
          this.list = lunchesData.menuList;
          this._id = lunchesData._id;
          // this.hide = true;
          this.onlyOneCheckBox();
        // }
      },
      err => console.error(err)
     );
  }

  toggle(item) {
		item.hide = !item.hide;
  }
  
   onlyOneCheckBox() {
          window.onload = function() {
          var checkboxgroup = document.getElementById('list').getElementsByTagName("input");
          var limit = 4;
          for (let i = 0; i < checkboxgroup.length; i++) {
              checkboxgroup[i].onchange = function() {
                  let checkedcount = 0;
                      for (let i = 0; i < checkboxgroup.length; i++) {
                      checkedcount += (checkboxgroup[i].checked) ? 1 : 0;
                      console.log(checkedcount);
                  }
                  if (checkedcount > limit) {
                      this.checked = false;
                  }
              }
          }
      }
   }
}
