import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { menuItems } from '../menuItems';
import { Meal } from '../menuItems';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  item: Meal = {} as Meal;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
    ) {}

  addToOrder() {
    window.alert("This item has been added to your order!");
    this.orderService.addToOrder(this.item);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['itemId'];
      this.item = menuItems[this.id];
    });

  }
}
