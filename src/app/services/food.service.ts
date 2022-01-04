import { Injectable } from '@angular/core';
import { FoodInfoInterface } from '../interfaces/food-info.interface';

@Injectable({ //just one coppy of this service (FoodInventoryService)auto create when start the program
  providedIn: 'root',
})
export class FoodInventoryService {
  private readonly foodInventory: FoodInfoInterface[] = []  //Require when define need elements in FoodInfoInterface


  constructor() { //code auto run when create a class
      this.foodInventory.push({name: "beef", img: "", other:"beef info", type: "breakfast"}); //add element into array foodInventory
      this.foodInventory.push({name: "pork", img: "", other:"pork info" , type: "breakfast"});
      this.foodInventory.push({name: "chicken", img: "", other:"chicken info" , type: "breakfast"});
      this.foodInventory.push({name: "lamb", img: "", other:"lamb info", type: "breakfast"});
      this.foodInventory.push({name: "crab", img: "", other:"crab info", type: "breakfast"});
      this.foodInventory.push({name: "octopus", img: "", other:"octopus info", type: "breakfast"});
      this.foodInventory.push({name: "nail", img: "", other:"nail info", type: "breakfast"});
  }

  // get a name into array
  public getFoodInventory(): string[] {
    const foodList: string[] = []; //create a variable

    this.foodInventory.forEach(food => {  //loop all element into array
      foodList.push(food.name);
    });

    return foodList;
  }

  public addNewFood(newFood: FoodInfoInterface)  { // type of FoodInfoInterface bc input need to match with element into array . function no return, don't need output type
    console.log("A")
    this.foodInventory.push(newFood);//bc newFood had FoodInfoInterface type, so just add variable of this type.
  } 
  
}