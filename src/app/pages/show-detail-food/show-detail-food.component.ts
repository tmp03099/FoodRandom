import { Component, Input, OnInit } from '@angular/core';
import { FoodInfoInterface } from 'src/app/interfaces/food-info.interface';




@Component({
  selector: 'app-show-detail-food',
  templateUrl: './show-detail-food.component.html',
  styleUrls: ['./show-detail-food.component.scss']
})
export class ShowDetailFoodComponent implements OnInit {

  @Input() foodDetail: FoodInfoInterface;


  constructor() {}

  ngOnInit(): void {
   this.foodDetail = {id: 1, type: "breakfast", name:"milk", other:"explain"}; //initialize set value 

  }
  

 



 



  

}
