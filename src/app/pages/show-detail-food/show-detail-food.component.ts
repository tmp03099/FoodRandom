import { Component, OnInit } from '@angular/core';
import { FoodType } from 'src/app/interfaces/food-type.interface';
import { FoodInventoryService } from 'src/app/services/food.service';
import { FoodInfoInterface } from 'src/app/interfaces/food-info.interface';





@Component({
  selector: 'app-show-detail-food',
  templateUrl: './show-detail-food.component.html',
  styleUrls: ['./show-detail-food.component.scss']
})
export class ShowDetailFoodComponent implements OnInit {

  listInventory: FoodInventoryService;
  selectedList?: FoodInfoInterface;






  constructor(
    private readonly listService: FoodInventoryService
    
  ) {}

  ngOnInit(): void {
    

  }

  onSelect(detail: FoodInfoInterface){
    this.selectedList =  detail
  }



 



  

}
