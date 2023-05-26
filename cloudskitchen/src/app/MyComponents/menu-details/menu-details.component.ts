import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  OrderDetails } from 'src/app/FoodDetails';
import { FoodDetailsService } from 'src/app/Services/food-details.service';
import { OrderDetailsService } from 'src/app/Services/order-details.service';
import Swal from 'sweetalert2' 

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {
  constructor(private param:ActivatedRoute, private service:FoodDetailsService , private service1: OrderDetailsService){
  }
  getMenuId :any
  menuData: any
  ngOnInit():void{
    this.getMenuId = this.param.snapshot.paramMap.get('id')
    
    if(this.getMenuId)
    {
        this.menuData = this.service.foodDetails.filter((func)=>{
          return func.id == this.getMenuId;
        });
    }
    
  }
  PlaceOrder(OrderForm:any){
    const fd ={
      fullname : OrderForm.value.fullname,
      contactno :  OrderForm.value.contactno,
      address :  OrderForm.value.address,
      foodid : this.menuData[0].id,
      foodname :  this.menuData[0].FoodName,
      foodprice : this.menuData[0].FoodPrice,
    }
    this.service1.addOrderDetails(fd);
    this.SuccessAlert();
  }
  SuccessAlert()
  {
    Swal.fire('Order Placed!! ', 'Your Order is Placed Successfully!!', 'success')
  }
}


