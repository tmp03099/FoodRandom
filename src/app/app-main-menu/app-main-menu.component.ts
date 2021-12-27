import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Item, NgxWheelComponent, TextAlignment, TextOrientation } from 'ngx-wheel';

@Component({
  selector: 'app-main-menu',
  templateUrl: './app-main-menu.component.html',
  styleUrls: ['./app-main-menu.component.scss']
})
export class AppMainMenuComponent implements OnInit, AfterViewInit {
  @ViewChild("wheel") 
  public wheel: NgxWheelComponent|undefined;

  public width = 600;
  public height = 600;
  public spinDuration = 8;

  public textAlignment: TextAlignment = TextAlignment.CENTER;
  public textOrientation: TextOrientation = TextOrientation.HORIZONTAL;
  public idToLandOn;
  public items: Item[] = [
    {fillStyle : '#eae56f', text : 'Japanese', id: 1},
    {fillStyle : '#89f26e', text : 'Korean', id: 2},
    {fillStyle : '#7de6ef', text : 'American', id: 3},
    {fillStyle : '#e7706f', text : 'Mexican', id: 4},
    {fillStyle : '#f38ec0', text : 'Italian', id: 5},
    {fillStyle : '#76db9b', text : 'Chinese', id: 6},
    {fillStyle : '#188a42', text : 'Vietnamses', id: 7},
    {fillStyle : '#f38ec0', text : 'Indian', id: 8},
    {fillStyle : '#036475', text : 'Thai', id: 9}
  ]

  ngAfterViewInit(){
    // console.log('only after this event "wheel" is usable!')
    
    // console.log(this.wheel);

    // this.wheel?.spin();
  }

  reset(){
    this.wheel?.reset();
  }

  constructor() { 
    this.idToLandOn = 1;
  }

  ngOnInit(): void {
  }

  public before() {

  }

  public after() {

  }

}
