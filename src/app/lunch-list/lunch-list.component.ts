import { Component, OnInit } from '@angular/core';
import { LunchListService } from '../lunch-list.service';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-lunch-list',
  templateUrl: './lunch-list.component.html',
  styleUrls: ['./lunch-list.component.css']
})
export class LunchListComponent implements OnInit {

  lunchDishes: Array<object> = [];
  myForm: FormGroup;

  constructor(private lunchService: LunchListService, private fb: FormBuilder) {}

  ngOnInit() {

    this.myForm = this.fb.group({
      id: this.fb.array([])
    });

    this.lunchService.getLunch().subscribe(
      data => {
        this.lunchDishes = data;
        this.lunchDishes.map((item)=> {
          return item.selected = false
      })
    },
    err => console.error(err)
    );
  }

  onChange(id:string, isChecked: boolean) {
    const idFormArray = <FormArray>this.myForm.controls.id;
    
      if(isChecked) {
        idFormArray.push(new FormControl(id));
      } else {
        let index = idFormArray.controls.findIndex(x => x.value == id)
        idFormArray.removeAt(index);
      }
  };

  toggle(data) {
    data.selected = !data.selected;
  }
  
}

