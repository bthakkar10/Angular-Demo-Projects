import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { ContactComponent } from './MyComponents/contact/contact.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { MenuDetailsComponent } from './MyComponents/menu-details/menu-details.component';
import { MenuComponent } from './MyComponents/menu/menu.component';
import { OrdersComponent } from './MyComponents/orders/orders.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'menu', component: MenuComponent},
  {path: 'menu/:id', component: MenuDetailsComponent},
  {path:'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path : 'orders', component: OrdersComponent},
  {path : 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
