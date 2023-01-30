import { Component, OnInit } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';

declare var $: any;
declare var clientSlider: any;
declare var myMap: any;
// declare var menu:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  defaultVal = 0;
  options:number[]=[1,2,3,4,5];
  constructor(){

  }

  ngOnInit(): void {
    clientSlider();
    myMap();
    // menu();

  }

  onSubmit(form:NgForm){
    console.log(form.value);
  }
}
