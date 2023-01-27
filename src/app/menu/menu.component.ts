import { Component, OnInit } from '@angular/core';
import { food } from '../food/data';
import { FoodService } from '../services/food.service';
import { Food } from '../shared/models/food';
import { Category } from '../shared/models/category';

declare var menu:any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  foods:Food[] = [];
  categories:Category[] = [];
  food!: Food;

  constructor(private foodService:FoodService){

  }

  ngOnInit(): void {

    this.foods = this.foodService.getAll();
    this.categories = this.foodService.getAllCategories();

    console.log(food)
    menu();
  }

  addCategory(category:number){
    this.foods = this.foodService.getAllFoodsByCategory(category);
    //console.log(foods);
    // alert("ok");

  }

}
