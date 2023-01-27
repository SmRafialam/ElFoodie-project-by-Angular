import { Injectable } from '@angular/core';
import { Category } from '../shared/models/category';
import { Food } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Food{
    return this.getAll().find(food=>food.id == id)!;
  }


  getAllCategories():Category[]{
    return [
      {name: "All",    id: 1},
      {name: "Burger", id: 2},
      {name: "Pizza",  id: 3},
      {name: "Pasta",  id: 4},
      {name: "Fries",  id: 5},
    ]
  }


  getAllFoodsByCategory(category:number):Food[]{
    return category == 1?this.getAll():this.getAll().filter(food=>food.category?.includes(category))

    // return tag == 'All'?this.getAll():this.getAll().filter(food=>food.category==food.id?)

    // if(tag == "All"){
    //   return this.getAll();
    // }else{
    //   return this.getAll().filter(food=>food.category?.includes(tag));
    // }
  }

  getAll():Food[]{
    return[
      {
        id: 1,
        imagePath: '/assets/images/f1.png',
        title: "Delicious Pizza",
        description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 20,
        category: [1,3]
      },
      {
        id: 2,
        imagePath: '/assets/images/f2.png',
        title: "Delicious Burger",
        description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 15,
        category: [1,2]
      },
      {
        id: 3,
        imagePath: '/assets/images/f3.png',
        title: "Delicious Pizza",
        description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 17,
        category: [1,3]
      },
      {
        id: 4,
        imagePath: '/assets/images/f4.png',
        title: "Delicious Pasta",
        description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 18,
        category: [1,4]
      },
      {
        id: 5,
        imagePath: '/assets/images/f5.png',
        title: "French Fries",
        description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 10,
        category: [1,5]
      },
      {
        id: 6,
        imagePath: '/assets/images/f6.png',
        title: "Delicious Pizza",
        description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 15,
        category: [1,3]
      },
      {
        id: 7,
        imagePath: '/assets/images/f7.png',
        title: "Tasty Burger",
        description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 12,
        category: [1,2]
      },
      {
        id: 8,
        imagePath: '/assets/images/f8.png',
        title: "Tasty Burger",
        description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 14,
        category: [1,2]
      },
      {
        id: 9,
        imagePath: '/assets/images/f9.png',
        title: "Delicious Pasta",
        description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 10,
        category: [1,4]
      }

    ]
  }
}
