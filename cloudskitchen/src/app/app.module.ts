import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { MenuComponent } from './MyComponents/menu/menu.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { ContactComponent } from './MyComponents/contact/contact.component';
import { MenuDetailsComponent } from './MyComponents/menu-details/menu-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdersComponent } from './MyComponents/orders/orders.component';
import { LoginComponent } from './MyComponents/login/login.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    MenuDetailsComponent,
    OrdersComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
