import { Injectable } from '@angular/core';
import { FoodInfoInterface } from '../interfaces/food-info.interface';

@Injectable({ //just one coppy of this service (FoodInventoryService)auto create when start the program
  providedIn: 'root',
})
export class FoodInventoryService {
  private readonly foodInventory: FoodInfoInterface[] = []  //Require when define need elements in FoodInfoInterface


  constructor() { //code auto run when create a class
      this.foodInventory.push({type: 'FoodType', name: "beef", other:"beef info" }); //add element into array foodInventory
      this.foodInventory.push({type: "ll", name: "beef", other:"beef info" });
      this.foodInventory.push({type: "uu", name: "beef", other:"beef info" });
      this.foodInventory.push({type: "tt", name: "beef", other:"beef info" });
      this.foodInventory.push({type: "yy", name: "beef", other:"beef info" });
      this.foodInventory.push({type: "ee", name: "beef", other:"beef info" });
      this.foodInventory.push({type: "nn", name: "beef", other:"beef info" });
      this.foodInventory.push({type: "oo", name: "beef", other:"beef info" });
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
    console.log(this.addNewFood)
    this.foodInventory.push(newFood);//bc newFood had FoodInfoInterface type, so just add variable of this type.

  } 

  public getBreakfasts(): string [] {
    const breakfastsList: string [] = [];

    this.foodInventory.forEach(food => {
      if (food.type == "Breakfast"){
        breakfastsList.push(food.name);
      }
    });

    return breakfastsList;
  }

  public getMeals(): string [] {
    const mealsList: string [] = [];

    this.foodInventory.forEach(food => {
      if (food.type == "Meal"){
        mealsList.push(food.name);
      }
    });

    return mealsList;
  }
  
}