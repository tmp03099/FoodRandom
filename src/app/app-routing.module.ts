import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMainMenuComponent } from './app-main-menu/app-main-menu.component';
import { DataComponent } from './pages/data/data.component';

const routes: Routes = [
  {
    path: 'home', component: AppMainMenuComponent
  },
  {
    path: 'data', component: DataComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
