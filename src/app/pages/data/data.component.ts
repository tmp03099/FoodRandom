import { Component, OnInit, Input} from '@angular/core';
import { FoodInventoryService } from 'src/app/services/food.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})


export class DataComponent implements OnInit {


  public addFoodDisplay: boolean = true;
  public minusFoodDisplay: boolean = false;
  public breakfastDetail: string[];
  public mealDetail: string[];

  showAddFoodDialog() {
      this.addFoodDisplay = true;
  }

  showMinusFoodDialog() {
    this.minusFoodDisplay = true;
  }


  constructor(
    private readonly listService : FoodInventoryService
  ) { }
 
  ngOnInit(): void {
    this.breakfastDetail = this.listService.getBreakfastInventory(); //assign variable to hold return value of function
    this.mealDetail = this.listService.getMealInventory();
  }

  updateListFood(){
    this.breakfastDetail = this.listService.getBreakfastInventory(); 
    console.log(this.breakfastDetail);
    this.mealDetail = this.listService.getMealInventory();
  }

  

}
