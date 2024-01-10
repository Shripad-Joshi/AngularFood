import { Component } from '@angular/core';
import { Cart } from '../shared/models/card';
import { CartService } from '../services/cart/cart.service';
import { CartItem } from '../shared/models/CardItem';
import { FoodService } from '../services/food/food.service';
import { food } from '../shared/food';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cart!:Cart;
  constructor(private cartService:CartService){
     this.setCart();
  }

  setCart(){
    this.cart=this.cartService.getCart();
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity=parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
    this.setCart();
  }
  ngOnInit():void{

  }
}
