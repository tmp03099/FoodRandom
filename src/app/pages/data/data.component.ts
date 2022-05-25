import { Component, OnInit, Input} from '@angular/core';
import { FoodInventoryService } from 'src/app/services/food.service';
import { FoodInfoInterface } from 'src/app/interfaces/food-info.interface';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})


export class DataComponent implements OnInit {


  public addFoodDisplay: boolean = false;
  public breakfastDetail: string[];
  public mealDetail: string[];
  public remainList: string;
  public displayDetailFood: boolean = false;
  public getDetail: FoodInfoInterface;


  constructor(
    private readonly listService : FoodInventoryService
  ) { }
 
  ngOnInit(): void {
    this.breakfastDetail = this.listService.getBreakfastInventory(); //assign variable to hold return value of function
    this.mealDetail = this.listService.getMealInventory();
    
  }
  
  updateListFood(){
    this.breakfastDetail = this.listService.getBreakfastInventory(); 
    this.mealDetail = this.listService.getMealInventory();
  }
  
  
  
  deleteListFood(name: string){
    this.listService.deleteFood(name);
    this.updateListFood();
  }

  showAddFoodDialog() {
    this.addFoodDisplay = true;
 }

  showDetailDialog(name: string){
    this.displayDetailFood = true;
    this.getDetail = this.listService.detailDisplay(name); 
  }
}
