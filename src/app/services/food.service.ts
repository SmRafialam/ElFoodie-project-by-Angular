import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food'
import { Tag } from '../shared/models/tag'

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Food{
    return this.getAll().find(food=>food.id == id)!;
  }


  getAllTags():Tag[]{
    return [
      {name: "All"},
      {name: "Burger"},
      {name: "Pizza"},
      {name: "Pasta"},
      {name: "Fries"},
    ]
  }


  getAllFoodsByTag(tag:string):Food[]{

    return tag == "All"?this.getAll():this.getAll().filter(food=>food.category?.includes(tag))

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
      },
      {
        id: 2,
        imagePath: '/assets/images/f2.png',
        title: "Delicious Burger",
        description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 15
      },
      {
        id: 3,
        imagePath: '/assets/images/f3.png',
        title: "Delicious Pizza",
        description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 17
      },
      {
        id: 4,
        imagePath: '/assets/images/f4.png',
        title: "Delicious Pasta",
        description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 18
      },
      {
        id: 5,
        imagePath: '/assets/images/f5.png',
        title: "French Fries",
        description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 10
      },
      {
        id: 6,
        imagePath: '/assets/images/f6.png',
        title: "Delicious Pizza",
        description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 15
      },
      {
        id: 7,
        imagePath: '/assets/images/f7.png',
        title: "Tasty Burger",
        description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 12
      },
      {
        id: 8,
        imagePath: '/assets/images/f8.png',
        title: "Tasty Burger",
        description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 14
      },
      {
        id: 9,
        imagePath: '/assets/images/f9.png',
        title: "Delicious Pasta",
        description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 10
      }



      // '/assets/images/f1.png',
      // '/assets/images/f2.png',
      // '/assets/images/f3.png',
      // '/assets/images/f4.png',
      // '/assets/images/f5.png',
      // '/assets/images/f6.png',
      // '/assets/images/f7.png',
      // '/assets/images/f8.png',
      // '/assets/images/f9.png'
    ]
  }
}
