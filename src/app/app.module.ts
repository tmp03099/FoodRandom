import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMainMenuComponent } from './app-main-menu/app-main-menu.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { NgxWheelModule } from 'ngx-wheel';



@NgModule({
  declarations: [
    AppComponent,
    AppMainMenuComponent,
    AppHeaderComponent,
    AppFooterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    TabViewModule,
    NgxWheelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
