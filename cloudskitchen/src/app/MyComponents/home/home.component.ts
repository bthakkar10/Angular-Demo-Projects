import { Component, inject, OnInit } from '@angular/core';
import { FoodDetails } from 'src/app/FoodDetails';
import { FoodDetailsService } from 'src/app/Services/food-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  foodData : FoodDetails[] = [];
  FoodDetailsService : FoodDetailsService = inject(FoodDetailsService);
  constructor() {
    this.FoodDetailsService.getAllFoodDetails().then((foodData: FoodDetails[]) => {
      this.foodData = foodData;
    });
  }
}
    // constructor(private service: FoodDetailsService){ }
    // foodData = this.service.foodDetails;
