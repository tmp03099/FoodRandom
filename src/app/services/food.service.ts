import { Injectable } from '@angular/core';
import { FoodInfoInterface } from '../interfaces/food-info.interface';

@Injectable({ //just one coppy of this service (FoodInventoryService)auto create when start the program
  providedIn: 'root',
})
export class FoodInventoryService {
  private readonly foodInventory: FoodInfoInterface[] = []  //Require when define need elements in FoodInfoInterface


  constructor() { //code auto run when create a class
      this.foodInventory.push({name: "beef", img: "", other:"beef info"}); //add element into array foodInventory
      this.foodInventory.push({name: "pork", img: "", other:"pork info"});
      this.foodInventory.push({name: "chicken", img: "", other:"chicken info"});
      this.foodInventory.push({name: "lamb", img: "", other:"lamb info"});
      this.foodInventory.push({name: "crab", img: "", other:"crab info"});
      this.foodInventory.push({name: "octopus", img: "", other:"octopus info"});
      this.foodInventory.push({name: "nail", img: "", other:"nail info"});
  }

  // get a name into array
  public getFoodInventory(): string[] {
    const foodList: string[] = []; //create a variable

    this.foodInventory.forEach(food => {  //loop all element into array
      foodList.push(food.name);
    });

    return foodList;
  }
}