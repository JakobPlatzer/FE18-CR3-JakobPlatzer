import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DetailsComponent } from './details/details.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {
    path:"",component: HomeComponent
  },{
    path:"menu",component: MenuComponent
  },{
    path:"aboutUs",component: AboutusComponent
  },{
    path:"menuItems/:itemId",component: DetailsComponent
  }, {
    path:"order",component: OrderComponent 
  }, {
    path: "**", component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
