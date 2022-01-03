import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {


  public addFoodDisplay: boolean = true;
  public minusFoodDisplay: boolean = false;

  showAddFoodDialog() {
      this.addFoodDisplay = true;
  }

  showMinusFoodDialog() {
    this.minusFoodDisplay = true;
  }

  constructor() { }
 
  ngOnInit(): void {

  }

}
