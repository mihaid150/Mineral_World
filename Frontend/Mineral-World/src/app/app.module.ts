import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { MineralCardComponent } from './Mineral/mineral-card/mineral-card.component';
import { MineralListComponent } from './Mineral/mineral-list/mineral-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MineralWorldService } from './services/mineral-world.service';
import { AddMineralComponent } from './Mineral/add-mineral/add-mineral.component';


const appRoutes: Routes = [
  {path: '', component: MineralListComponent},
  {path: 'sell-mineral', component: AddMineralComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MineralCardComponent,
    MineralListComponent,
    NavBarComponent,
    AddMineralComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MineralWorldService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
