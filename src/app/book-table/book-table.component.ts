import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
declare var myMap: any;


@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent implements OnInit {

  defaultVal = 0;
  options:number[]=[1,2,3,4,5];
  signupForm!: FormGroup;

  ngOnInit(): void {
      myMap();
    this.signupForm = new FormGroup({
      'name': new FormControl(null),
      'number': new FormControl(null),
      'email': new FormControl(null),
      'persons': new FormControl('0'),
      'date': new FormControl(null),


    })

  }

  onSubmit(){
    console.log(this.signupForm.value);
  }
}
