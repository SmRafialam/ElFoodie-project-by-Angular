import { Component, Input, OnInit } from '@angular/core';
declare var getYear:any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{

  currentDate!: Date;
  currentYear!: number;

  ngOnInit(): void {
   //  getYear();
   this.currentDate = new Date();
   this.currentYear = this.currentDate.getFullYear();
   //console.log(currentYear);
  }

//   getYear() {
//     var currentDate = new Date();
//     var currentYear = currentDate.getFullYear();
//     alert(currentYear);

// }
}
