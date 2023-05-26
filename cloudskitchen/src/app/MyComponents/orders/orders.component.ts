import { Component, OnInit} from '@angular/core';
import { OrderDetails } from 'src/app/FoodDetails';
import { OrderDetailsService } from 'src/app/Services/order-details.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit  {
  orderdetails: OrderDetails[] = [];
  constructor(private service: OrderDetailsService){}

  ngOnInit() {
    this.orderdetails = this.service.getAllOrderDetails();
  }
}

