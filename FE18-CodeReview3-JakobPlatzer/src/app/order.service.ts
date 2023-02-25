import { Injectable } from '@angular/core';
import { Meal } from './menuItems';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orderItems: Array<Meal> = [];

  constructor() { }

  addToOrder(item: Meal) {
    this.orderItems.push(item);
  }

  getOrder() {
    return this.orderItems;
  }

  clearOrder() {
    this.orderItems = [];
    return this.orderItems;
  }
}


// this is the basic order functionality