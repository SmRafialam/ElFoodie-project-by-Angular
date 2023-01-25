import { Component, OnInit } from '@angular/core';
declare var myMap: any;


@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent implements OnInit {

  ngOnInit(): void {
      myMap();

  }
}
