import { Component } from '@angular/core';
import { FoodDetailsService } from 'src/app/Services/food-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private service: FoodDetailsService){ }
  foodData = this.service.foodDetails;
}
