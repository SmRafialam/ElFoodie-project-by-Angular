import { Component, OnInit } from '@angular/core';
import { food } from '../food/data';
import { FoodService } from '../services/food.service';
import { Food } from '../shared/models/food';
import { Tag } from '../shared/models/tag';

declare var menu:any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  foods:Food[] = [];
  tags:Tag[] = [];
  food!: Food;

  constructor(private foodService:FoodService){

  }

  ngOnInit(): void {

    this.foods = this.foodService.getAll();
    this.tags = this.foodService.getAllTags();
    
    console.log(food)
    menu();
  }
  
}
