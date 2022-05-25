import { Component, Input, OnInit } from '@angular/core';
import { FoodInfoInterface } from 'src/app/interfaces/food-info.interface';
import { FoodInventoryService } from 'src/app/services/food.service';



@Component({
  selector: 'app-show-detail-food',
  templateUrl: './show-detail-food.component.html',
  styleUrls: ['./show-detail-food.component.scss']
})
export class ShowDetailFoodComponent implements OnInit {

  @Input() foodDetail: FoodInfoInterface;  


  constructor(
    private readonly foodIntService: FoodInventoryService
  ) {}

  ngOnInit(): void {
   this.foodDetail = {type: "breakfast", name:"milk", other:"explain"}; //initialize set value 
  }
  

 
}
