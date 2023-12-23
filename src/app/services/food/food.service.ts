import { Injectable } from '@angular/core';
import { food } from 'src/app/shared/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

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
        imageUrl:'/assets/images/images (1).jpeg',
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
        imageUrl:'/assets/images/images (2).jpeg',
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
        imageUrl:'/assets/images/images (3).jpeg',
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
        imageUrl:'/assets/images/images (4).jpeg',
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
        imageUrl:'/assets/images/images (5).jpeg',
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
        imageUrl:'/assets/images/images (6).jpeg',
        tags:['Fastfood','Pizza','Lunch']
      }
    ]
  }
}
