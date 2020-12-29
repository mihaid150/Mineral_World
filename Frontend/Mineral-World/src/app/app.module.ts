import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MineralCardComponent } from './Mineral/mineral-card/mineral-card.component';
import { MineralListComponent } from './Mineral/mineral-list/mineral-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MineralWorldService } from './services/mineral-world.service';


@NgModule({
  declarations: [
    AppComponent,
    MineralCardComponent,
    MineralListComponent,
      NavBarComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    MineralWorldService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
