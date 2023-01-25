import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var clientSlider: any;
declare var myMap: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    clientSlider();
    myMap();
  }
}
