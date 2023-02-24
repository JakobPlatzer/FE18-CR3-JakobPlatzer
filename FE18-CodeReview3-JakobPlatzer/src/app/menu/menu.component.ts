import { Component, OnInit } from '@angular/core';
import { menuItems } from '../menuItems';
import { Meal } from '../menuItems';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: Array<Meal> = menuItems;

  constructor() {}

  ngOnInit(): void {
    
  }


}
