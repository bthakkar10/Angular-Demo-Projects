import { Injectable } from '@angular/core';
import { FoodDetails } from '../FoodDetails';

@Injectable({
  providedIn: 'root'
})
export class FoodDetailsService {

  url = 'http://localhost:3000/FoodDetails/';
  // foodDetails : FoodDetails[] = [];
  async getAllFoodDetails(): Promise<FoodDetails[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
  async getFoodDetailsById(id: number): Promise<FoodDetails[] | []> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? [];
  }
  constructor() { 
    
    // this.foodDetails = [
    //   {
    //     id : 1,
    //     FoodName : "Cheese Burger",
    //     FoodDetail : "Experience a burst of flavor and mouthfuls of cheese in this delicious burger loaded with Veggie Patty & Cheese Burst Patty Topped with Onion, Tomatoes, Coleslaw, Harisa Sauce, Chipotle Mayo and Cheese Slices...",
    //     FoodPrice : 125,
    //     FoodImg : "../../../assets/img/foodimg1.png"
    //   },
    //   {
    //     id : 2,
    //     FoodName : "Paneer Grilled Sandwich",
    //     FoodDetail : "A popular and filling indian style sandwich prepared with grated paneer and your favourite veggies stuffing...",
    //     FoodPrice : 99,
    //     FoodImg : "../../../assets/img/foodimg2.jpg"
    //   },
    //   {
    //     id : 3,
    //     FoodName : "Garden Delight Pizza",
    //     FoodDetail : "The freshness of capsisum, onions, tomatoes, jalpenoes with the flavour of paneer and red paprika...",
    //     FoodPrice : 189,
    //     FoodImg : "../../../assets/img/foodimg3.jpg"
    //   },
    //   {
    //     id : 4,
    //     FoodName : "Cheesy Italian Frankie",
    //     FoodDetail : "Fine blend of cheese dip when mixed with italians herbs, black olives, corn, fresh veggies and cheese simply makes it a perfect italian savoury...",
    //     FoodPrice : 149,
    //     FoodImg : "../../../assets/img/foodimg4.jpg"
    //   },
    //   {
    //     id : 5,
    //     FoodName : "Oreo Ice Cream",
    //     FoodDetail : "Rich and creamy Ice cream flavoured with Choco Chips and your favourite Oreo biscuits..",
    //     FoodPrice : 119,
    //     FoodImg : "../../../assets/img/foodimg5.jpg"
    //   },
    //   {
    //     id : 6,
    //     FoodName : "Chocolate Brownie",
    //     FoodDetail : "Fudgy brownies made with the best quality of Chocolates and topped with silky Chocolate Ganache..",
    //     FoodPrice : 89,
    //     FoodImg : "../../../assets/img/foodimg6.jpg"
    //   },
    //   { 
    //     id: 7,
    //     FoodName : "Quinoa Salad",
    //     FoodDetail : "Steamed Quinoa served along with salad greens and a dressing of hung curd tahini",
    //     FoodPrice : 149,
    //     FoodImg: "../../../assets/img/foodimg7.jpg"
    //   },
    //   {
    //     id:8,
    //     FoodName : "Manchurian Noodles",
    //     FoodDetail: "Mix Veg Fried balls, Onions, Capsicum and Hakka Noodles tossed in classic manchurian sauce and garnished with spring onions",
    //     FoodPrice : 129,
    //     FoodImg: "../../../assets/img/foodimg8.jpg",
    //   },
    //   {
    //     id : 9,
    //     FoodName : "Hot & Sour Soup",
    //     FoodDetail: "A Flovoured pack, veggie rich mind blowing soup that is truly delicious as well as healthy ",
    //     FoodPrice : 89,
    //     FoodImg: "../../../assets/img/foodimg9.jpg",
    //   },
    // ]
  }
}
