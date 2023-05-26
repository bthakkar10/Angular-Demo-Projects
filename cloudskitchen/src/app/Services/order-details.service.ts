import { Injectable } from '@angular/core';
import { OrderDetails } from '../FoodDetails';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  private orderDetails : OrderDetails[] = [];
  addOrderDetails(details: OrderDetails) {
    this.orderDetails.push(details);
    localStorage.setItem("allorders", JSON.stringify(this.orderDetails))
  }

  getAllOrderDetails() {
    const localItem =  localStorage.getItem("allorders");
    if(localItem == null)
    {
      this.orderDetails= []
    }
    else{
      this.orderDetails = JSON.parse(localItem)
    }
    return this.orderDetails;
  }
}
