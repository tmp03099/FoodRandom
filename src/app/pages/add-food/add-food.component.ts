import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FoodInfoInterface } from 'src/app/interfaces/food-info.interface';
import { FoodType } from 'src/app/interfaces/food-type.interface';
import { FoodInventoryService } from 'src/app/services/food.service';



@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss'],
  providers: []
})

export class AddFoodComponent implements OnInit {

  public foodType: FoodType[];

  public selectedType: FoodType ;

  public uploadedFiles: any[] = [];

  public selectedRecipe: string = "";

  public selectedName: string = "";

  public breakfasts: string[] = [];

  constructor(
    private readonly messageService: MessageService,
    private readonly foodIntService: FoodInventoryService
    ) {   //it run first, when need to set up a value or run relevant codes
    
    //type of food
    this.foodType = [
      {name: 'Breakfast' , code: 'BF'},
      {name: 'Meal' , code: 'M'}
    ]
  }

  onUpload(event: any){
    for(let file of event.files) {
      
      this.uploadedFiles.push(file); 
    }
    this.messageService.add({severity: 'info', detail: ''});
  }



  public onClickAction(event: Event){ 

    var getObject: FoodInfoInterface = {type: this.selectedType.name, name: this.selectedName, other: this.selectedRecipe}; //hold infomation get from user input
    this.foodIntService.addNewFood(getObject); // call function addNewFood with input getObject to add new item food in food inventory service. 

  }

  ngOnInit(): void {

  }


}
