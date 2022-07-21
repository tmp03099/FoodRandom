import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FoodInfoInterface } from 'src/app/interfaces/food-info.interface';
import { FoodType } from 'src/app/interfaces/food-type.interface';
import { FoodInventoryService } from 'src/app/services/food.service';
import { UploadService } from 'src/app/services/upload.service';
import { DataComponent } from '../data/data.component';






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
    private readonly foodIntService: FoodInventoryService,
    private readonly dataComponent: DataComponent,
    private readonly uploadService: UploadService

    
    
    ) {   //it run first, when need to set up a value or run relevant codes
    
    //type of food
    this.foodType = [
      {name: 'Breakfast' , code: 'BF'},
      {name: 'Meal' , code: 'M'}
    ]
  }

  onUpload(event: any){
    console.log("onUpload() START");
    for(let file of event.files) {
      console.log("upload file",file);
      this.uploadedFiles.push(file); 
      
    }
    this.messageService.add({severity: 'info', summary:"File Uploaded" ,detail: ''});
  }



  public onClickAction(event: Event){ 

    var getObject: FoodInfoInterface = {type: this.selectedType.name, name: this.selectedName, img:this.uploadedFiles, other: this.selectedRecipe}; //hold infomation get from user input
    this.foodIntService.addNewFood(getObject); // call function addNewFood with input getObject to add new item food in food inventory service. 
    this.foodIntService.setStorage();//
    this.dataComponent.updateListFood();
    this.dataComponent.addFoodDisplay = false;
  } 


  public uploadHandler(event: any) {
    console.log(event.files);
  }


  ngOnInit(): void {
    
   
  }

  



}
