import { Component, OnInit } from '@angular/core';
import { menuItems, Meal } from '../menuItems';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: Array<Meal> = menuItems;
  item: Meal = {} as Meal;
  id: number = 0;

  constructor(
    private orderService: OrderService,
  ) {}

  addToOrder(item: Meal) {
    window.alert("This item has been added to your order!");
    this.orderService.addToOrder(item);
  }


  ngOnInit(): void {
    
  }


}
