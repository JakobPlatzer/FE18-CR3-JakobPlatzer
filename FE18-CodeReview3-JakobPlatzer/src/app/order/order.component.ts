import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Meal } from '../menuItems';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderItems: Array<Meal> = [];
  totalAmount: number = 0;

  checkoutForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
  });

  constructor(private orderService: OrderService, private fb: FormBuilder) {}

  calculateAmount(item : Meal) {
    this.totalAmount = this.totalAmount + item.price;
  }

  clearOrder() {
    window.alert('Your order has been cleared');
    this.orderItems = this.orderService.clearOrder();
  }

  onSubmit() {
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.orderItems = this.orderService.clearOrder();
  }

  ngOnInit(): void {
    this.orderItems = this.orderService.getOrder();
    this.calculateAmount
    console.log(this.totalAmount)
  }

}
