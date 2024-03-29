import { Injectable } from '@angular/core';
import { food } from 'src/app/shared/food';
import { Tag } from 'src/app/shared/models/Tags';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllTags():Tag[]{
    return[
      {name:'All',count: 14},
      {name:'FastFood',count: 4},
      {name:'Pizza',count: 2},
      {name:'Lunch',count: 3},
      {name:'SlowFood',count: 2},
      {name:'Hamburger',count: 1},
      {name:'Fry',count: 1},
      {name:'Soup',count: 1}
    ]
  }

  getFoodById(id: number):food{
      return this.getAll().find(food=> food.id==id)!;
  }

  getAllFoodsByTag(tag:string):food[]{
  
    return tag=="All" ?
    this.getAll() :
    this.getAll().filter(food=>food.tags?.includes(tag));
  }

  getAllFoodsBySearchTerm(searchTerm:string):food[]{
    return this.getAll().filter(food=>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAll():food[]{
    return[
      {
        id:1,
        name:'Pizza Pepperoni',
        cookTime:'10-20',
        price:10,
        favorite:false,
        origins:['italy'],
        stars:4.5,
        imageUrl:'/assets/images/food-1.jpg',
        tags:['Fastfood','Pizza','Lunch']
      },
      {
        id:2,
        name:'Meatball',
        cookTime:'20-30',
        price:20,
        favorite:true,
        origins:['china','miidle east','persia'],
        stars:4.7,
        imageUrl:'/assets/images/food-2.jpg',
        tags:['Slowfood','Lunch']
      },
      {
        id:3,
        name:'Hamburger',
        cookTime:'10-15',
        price:5,
        favorite:false,
        origins:['germany','us'],
        stars:3.5,
        imageUrl:'/assets/images/food-3.jpg',
        tags:['Fastfood','Hamburger']
      },
      {
        id:4,
        name:'Fried Potatoes',
        cookTime:'15-20',
        price:2,
        favorite:true,
        origins:['Belgium','france'],
        stars:3.3,
        imageUrl:'/assets/images/food-4.jpg',
        tags:['Fastfood','Fry']
      },
      {
        id:5,
        name:'Chicken soup',
        cookTime:'40-50',
        price:11,
        favorite:false,
        origins:['indian','asia'],
        stars:3.0,
        imageUrl:'/assets/images/food-5.jpg',
        tags:['Slowfood','Soup']
      },
      {
        id:6,
        name:'Vegetables Pizza',
        cookTime:'40-50',
        price:9,
        favorite:false,
        origins:['italy'],
        stars:4.0,
        imageUrl:'/assets/images/food-6.jpg',
        tags:['Fastfood','Pizza','Lunch']
      }
    ]
  }
}
