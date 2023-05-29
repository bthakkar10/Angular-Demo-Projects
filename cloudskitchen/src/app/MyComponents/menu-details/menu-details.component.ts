import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodDetails } from 'src/app/FoodDetails';
import { FoodDetailsService } from 'src/app/Services/food-details.service';
import { OrderDetailsService } from 'src/app/Services/order-details.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {
  foodDetails: FoodDetails[] = [];
  menuData: any;
  FoodDetailId: any;
 // FoodDetailsService: FoodDetailsService = inject(FoodDetailsService);
  constructor(private param: ActivatedRoute, private service1: OrderDetailsService , private FoodDetailsService : FoodDetailsService) {
  }

  
  async ngOnInit() {
     //new 
     this.FoodDetailId = parseInt(this.param.snapshot.params['id'], 10);
     if(this.FoodDetailId){
      this.menuData  = await this.FoodDetailsService.getFoodDetailsById(this.FoodDetailId);
      console.log(this.menuData)
     }
  }
  PlaceOrder(OrderForm: any) {
    const fd = {
      fullname: OrderForm.value.fullname,
      contactno: OrderForm.value.contactno,
      address: OrderForm.value.address,
      foodid: this.menuData.id,
      foodname: this.menuData.FoodName,
      foodprice: this.menuData.FoodPrice,
    }
    this.service1.addOrderDetails(fd);
    this.SuccessAlert();
  }
  SuccessAlert() {
    Swal.fire('Order Placed!! ', 'Your Order is Placed Successfully!!', 'success')
  }
}


