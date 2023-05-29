import { Component, inject } from '@angular/core';
import { FoodDetails } from 'src/app/FoodDetails';
import { FoodDetailsService } from 'src/app/Services/food-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  foodData : FoodDetails[] = [];
  FoodDetailsService : FoodDetailsService = inject(FoodDetailsService);
  constructor(){ 
    this.FoodDetailsService.getAllFoodDetails().then((foodData: FoodDetails[]) => {
      this.foodData = foodData;
    });
  }
  
}
