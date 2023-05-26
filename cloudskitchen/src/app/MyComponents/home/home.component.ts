import { Component, OnInit } from '@angular/core';
import { FoodDetailsService } from 'src/app/Services/food-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
    constructor(private service: FoodDetailsService){ }
    foodData = this.service.foodDetails;
}
