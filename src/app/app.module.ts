import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMainMenuComponent } from './app-main-menu/app-main-menu.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { NgxWheelModule } from 'ngx-wheel';
import { ButtonModule } from 'primeng/button';
import { DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TieredMenuModule} from 'primeng/tieredmenu';
import { DataComponent } from './pages/data/data.component';
import { AccordionModule } from 'primeng/accordion';
import { AddFoodComponent } from './pages/add-food/add-food.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import { MessageModule } from 'primeng/message';
import { MessagesModule} from 'primeng/messages';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ShowDetailFoodComponent } from './pages/show-detail-food/show-detail-food.component';


@NgModule({
  declarations: [
    AppComponent,
    AppMainMenuComponent,
    AppHeaderComponent,
    AppFooterComponent,
    DataComponent,
    AddFoodComponent,
    ShowDetailFoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    TabViewModule,
    NgxWheelModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    TieredMenuModule,
    AccordionModule,
    DropdownModule,
    FormsModule,
    FileUploadModule,
    HttpClientModule,
    ToastModule,
    MessageModule,
    MessagesModule
  ],
  providers: [MessageService], // Need to add MessageService to this provider if use Message Service.
  bootstrap: [AppComponent]
})
export class AppModule { }
