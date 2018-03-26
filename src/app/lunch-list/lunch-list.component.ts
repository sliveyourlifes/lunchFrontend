import { Component, OnInit } from '@angular/core';
import { LunchListService } from '../lunch-list.service';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {Router ,Routes, RouterModule} from "@angular/router";

@Component({
  selector: 'app-lunch-list',
  templateUrl: './lunch-list.component.html',
  styleUrls: ['./lunch-list.component.css']
})
export class LunchListComponent implements OnInit {

  lunchDishes: Array<object> = [];
  myForm: FormGroup;
  idFormArray: Array<string> = []


  constructor(private lunchService: LunchListService, private fb: FormBuilder, private http: Http, private router:Router) {}

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
        console.log(idFormArray.value)
      } else {
        let index = idFormArray.controls.findIndex(x => x.value == id)
        idFormArray.removeAt(index);
      }
  };

  

  onSubmit(){

    const httpOptions = {
      withCredentials: true,
      headers: new Headers({
        'Content-Type': 'application/json',
      })
    };

    let url = `http://localhost:3000/api/v1/lunch`;
    this.http.post(url,this.myForm.value.id, httpOptions).subscribe(res => {
     
     console.log(res.json());
      this.router.navigate(['lunch/orders/' + `${res.json()._id}`]);
    });
    console.log(this.myForm.value.id)
  }

  toggle(data) {
    data.selected = !data.selected;
  }
  
}

