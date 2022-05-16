import { Injectable } from '@angular/core';
import { FoodInfoInterface } from '../interfaces/food-info.interface';

@Injectable({ //just one coppy of this service (FoodInventoryService)auto create when start the program
  providedIn: 'root',
})
export class FoodInventoryService {
  private readonly foodInventory: FoodInfoInterface[] = []  //Require when define need elements in FoodInfoInterface


  constructor() { //code auto run when create a class
      this.foodInventory.push({id:1, type: 'Breakfast', name: "egg", other:"beef info" }); //add element into array foodInventory
      this.foodInventory.push({id:2, type: "Meal", name: "beef", other:"beef info" });
      this.foodInventory.push({id:3, type: "Meal", name: "pork", other:"beef info" });
      this.foodInventory.push({id:4, type: "Breakfast", name: "milk", other:"beef info" });
      this.foodInventory.push({id:5, type: "Breakfast", name: "oatmilk", other:"beef info" });
      this.foodInventory.push({id:6, type: "Meal", name: "lamp", other:"beef info" });
    
  }

  // get a name into array
  public getBreakfastInventory(): string[] {
    const breakfastList: string[] = []; //create a variable

    this.foodInventory.forEach(food => {  //loop all element into array
      if (food.type.toUpperCase() === "breakfast".toUpperCase()){
        breakfastList.push(food.name);
      }
    });

    return breakfastList;
  }

  public getMealInventory(): string[] {
    const mealList: string[] = []; //create a variable

    this.foodInventory.forEach(food => {  //loop all element into array
      if(food.type.toUpperCase() === "meal".toUpperCase()){
        mealList.push(food.name);
      }
      
    });

    return mealList;
  }

  // Function add new food to this services.
  public addNewFood(newFood: FoodInfoInterface)  { // type of FoodInfoInterface bc input need to match with element into array . function no return, don't need output type
      this.foodInventory.push(newFood);//bc newFood had FoodInfoInterface type, so just add variable of this type.
      console.log(this.foodInventory);

  }

  
  //Function subtract item from food inventory 
  public deleteFood(newFood: string){ //just have name so defined string
    const index = this.foodInventory.findIndex((food) => food.name === newFood);
    

    if (index !== -1){
      this.foodInventory.splice(index, 1);
    }
    console.log(newFood);

  }

  // Function show detail information
  public detailDisplay(detailFood: FoodInfoInterface){
    const index = this.foodInventory.findIndex((obj:any) =>  {return obj.name === detailFood});
    console.log(index);
    console.log(this.foodInventory);
  }


  




} 
