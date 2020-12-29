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
import { MineralDetailsComponent } from './Mineral/mineral-details/mineral-details.component';


const appRoutes: Routes = [
  {path: '', component: MineralListComponent},
  {path: 'buy-minerals', component: MineralListComponent},
  {path: 'sell-minerals', component: AddMineralComponent},
  {path: 'information-about-minerals', component: MineralListComponent},
  {path: 'mineral-details/:id', component: MineralDetailsComponent},
  {path: '**', component: MineralListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MineralCardComponent,
    MineralListComponent,
    NavBarComponent,
    AddMineralComponent,
    MineralDetailsComponent
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
