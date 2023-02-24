import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { menuItems, Meal } from '../menuItems';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  item: Meal = {} as Meal;
  id: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['itemId'];
      this.item = menuItems[this.id];
    });

  }
}
