import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { food } from '../shared/food';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  foods:food[]=[];
  constructor(private foodService:FoodService){ }
  ngOnInit(): void {
    this.foods=this.foodService.getAll();
  }
}
