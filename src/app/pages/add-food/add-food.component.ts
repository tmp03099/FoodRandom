import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FoodType } from 'src/app/interfaces/food-type.interface';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss'],
  providers: [MessageService]
})
export class AddFoodComponent implements OnInit {

  public type: FoodType[] = [];

  public selectedType: FoodType ;

  public uploadedFiles: any[] = [];


  constructor(
    private readonly messageService: MessageService
    ) {   //it run first, when need to set up a value or run relevant codes
    
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

  ngOnInit(): void {

  }

}
