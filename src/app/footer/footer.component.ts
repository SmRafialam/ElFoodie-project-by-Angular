import { Component, OnInit } from '@angular/core';
declare var getYear:any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{


  ngOnInit(): void {
     getYear();
  }
}
