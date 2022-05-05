import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Item, NgxWheelComponent, TextAlignment, TextOrientation } from 'ngx-wheel';
import { FoodInventoryService } from '../services/food.service';


@Component({
  selector: 'app-main-menu',
  templateUrl: './app-main-menu.component.html',
  styleUrls: ['./app-main-menu.component.scss']
})
export class AppMainMenuComponent implements OnInit, AfterViewInit {
  @ViewChild("wheel") 
  public wheel: NgxWheelComponent|undefined;

  public spinDuration = 8;

  public textAlignment: TextAlignment = TextAlignment.CENTER;
  public textOrientation: TextOrientation = TextOrientation.HORIZONTAL;
  public idToLandOn;
  
  public items: Item[] = [];

  public selectedFood: string|undefined;
  public display: boolean = false;
  public food: string[] = [];

  ngAfterViewInit(){
  
  }

  public reset(){
    this.wheel?.reset();
  }

  constructor(
    private readonly foodInventoryService: FoodInventoryService
  ) { 
    this.idToLandOn = 1;
  }

  ngOnInit(): void {
    this.food = this.foodInventoryService.getBreakfastInventory();
    console.log(this.food);

    //for each element in array
    this.food.forEach((food,index) => {
      this.items.push({fillStyle : this.getRandomColor() , text : food , id: index});
    });   
  }

  
  public before() {
  }

  public after() {
    console.log(this.idToLandOn);
    this.selectedFood = this.items.find((item) => item.id === this.idToLandOn)?.text  // find number to text while show dialog
    this.showDialog();

  }

  showDialog() {
    this.display = true;
  }
  
  // spin the wheel
  public async handlethis(event: Event){ 
    console.log("handlethis", event)
    this.reset();
    this.idToLandOn = this.getRandomInt(0,this.items.length - 1);

    await new Promise(resolve => setTimeout(resolve, 0));
    this.wheel?.spin();
  }

  // get breakfast wheel
  public breakfastWheel(event: Event){
    
    this.food = this.foodInventoryService.getBreakfastInventory();
    const newList: Item[] = [];
    this.food.forEach((food,index) => {
      newList.push({fillStyle : this.getRandomColor() , text : food , id: index});
    });
   
    this.items = newList;
    this.reset();
  }

  // get meal wheel
  public mealWheel(event: Event){
    this.food = this.foodInventoryService.getMealInventory();
    const newList: Item[] = [];
    this.food.forEach((food,index) => {
      newList.push({fillStyle : this.getRandomColor() , text : food , id: index});
    });
    
    this.items = newList;
    this.reset();
  }




  // create function for random and with input two number and return number type
  public getRandomInt(min: number, max: number) : number{  
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

  //create function for random color
  public getRandomColor() : string {
    var color = Math.floor(Math.random()*16777215).toString(16).slice(2, 50);
    return '#' + ( color);
  }

  


}
