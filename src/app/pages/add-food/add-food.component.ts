import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FoodType } from 'src/app/interfaces/food-type.interface';
import { FoodInventoryService } from 'src/app/services/food.service';



@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss'],
  providers: []
})
export class AddFoodComponent implements OnInit {

  public type: FoodType[] = [];

  public selectedType: FoodType ;

  public uploadedFiles: any[] = [];

  public selectedRecipe: string;

  constructor(
    private readonly messageService: MessageService,
    private readonly foodService: FoodInventoryService
    ) {   //it run first, when need to set up a value or run relevant codes
    
    //type of food
    this.type = [
      {name: 'Breakfast' , code: 'BF'},
      {name: 'Meal' , code: 'M'}
    ]
  }

  onUpload(event: any){
    for(let file of event.files) {
      this.uploadedFiles.push(file); 
    }
    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

  public async onClickAction(event: Event){ 
    console.log("save", event)
    console.log(this.selectedRecipe);
    console.log(this.selectedType.name);
    // var getObject: FoodInventoryService = {name: "a", img:"a", other:"", type: this.type};
    // this.foodService.addNewFood(getObject);
  }

  ngOnInit(): void {

  }

}
