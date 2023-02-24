import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path:"",component: HomeComponent
  },{
    path:"menu",component: MenuComponent
  },{
    path: "aboutUs",component: AboutusComponent
  },{
    path: 'menuItems/:itemId',component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
