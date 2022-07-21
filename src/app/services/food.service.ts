import { Injectable, OnInit } from '@angular/core';
import { FoodInfoInterface } from '../interfaces/food-info.interface';


@Injectable({ //just one coppy of this service (FoodInventoryService)auto create when start the program
  providedIn: 'root',
})
export class FoodInventoryService{
  private readonly foodInventory: FoodInfoInterface[] = []  //Require when define need elements in FoodInfoInterface


  constructor() { //code auto run when create a class
    console.log('constructor');
    
    this.foodInventory = JSON.parse(this.getUserStorage());//To retrieve data from localStorage (JSON.prase(inside is need JSON string))
    if (this.foodInventory == null) {

      this.foodInventory = [];

      this.foodInventory.push({type: 'Breakfast', name: "Tteokbokki Soup", other:"This is Korean Soup" }); //add element into array foodInventory
      this.foodInventory.push({type: "Breakfast", name: "Fried Pancake", other:"Mix Cabbage with egg and powder." });
      this.foodInventory.push({type: "Meal", name: "Tteokbokki", other:"Hot and Spicy" });
      this.foodInventory.push({type: "Meal", name: "Sondobo", other:"This is Korean hot and spicy soup with main dish is tofu" });
      this.foodInventory.push({type: "Breakfast", name: "Oatmilk", other:"Healthy breakfast" });
      this.foodInventory.push({type: "Meal", name: "Grill Salmon", other:"Reciepe" });
    }
    console.log(this.foodInventory);
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

    this.setStorage();
  }

  // Function show detail information
  public detailDisplay(detailFood: string): FoodInfoInterface{
    const index = this.foodInventory.findIndex((obj) =>  obj.name === detailFood);
    console.log(index);
  
    return this.foodInventory[index];
    
  }


  public keyFood: string = "key";
  public myItem: string;


  //set storage to store value as a JSON string
   public setStorage(){
    localStorage.setItem(this.keyFood,JSON.stringify(this.foodInventory));
    this.myItem = localStorage.getItem(this.keyFood)!;
    console.log(localStorage.getItem(this.keyFood));

  }


 // To retrive data and save it to an existing variable
  public getUserStorage(){
    let data = JSON.parse(localStorage.getItem(this.keyFood)!);//this is how transfroms to JSON string to JS obkect.
    console.log("Take",data); //If return data that mean return an object;
    return localStorage.getItem(this.keyFood)!; //this is return a JSON string that
  }

  




} 


