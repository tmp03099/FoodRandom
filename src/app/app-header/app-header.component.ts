import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor() { }

  public menuBar: MenuItem[] = []; //menuBar is a name can change //MenuItem is type can't change

  ngOnInit(): void {
   this.menuBar = [
     {
       label:'Home', routerLink: 'home',
       icon: 'pi pi-home'
     },
     {
      label: 'Food',
      icon: 'pi pi-star'
     },
     {
      label: 'Data', routerLink: 'data',
      icon: 'pi pi-file'
     }

   ]
  }
}
