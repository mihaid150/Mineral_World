import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MineralCardComponent } from './Mineral/mineral-card/mineral-card.component';
import { MineralListComponent } from './Mineral/mineral-list/mineral-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MineralWorldService } from './services/mineral-world.service';
import { AddMineralComponent } from './Mineral/add-mineral/add-mineral.component';
import { MineralDetailsComponent } from './Mineral/mineral-details/mineral-details.component';
import { UserLoginComponent } from './user/user-login/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register/user-register.component';
import { MainPageComponent } from './main-page/main-page/main-page.component';
import { InformationComponent } from './information/information/information.component';
import { UserServiceService } from './services/user-service.service';


const appRoutes: Routes = [
  {path: 'main', component: MainPageComponent},
  {path: 'buy-minerals', component: MineralListComponent},
  {path: 'sell-minerals', component: AddMineralComponent},
  {path: 'information-about-minerals', component: InformationComponent},
  {path: 'mineral-details/:id', component: MineralDetailsComponent},
  {path: 'user/login', component: UserLoginComponent},
  {path: 'user/register', component: UserRegisterComponent},
  {path: '**', component: MineralListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MineralCardComponent,
    MineralListComponent,
    NavBarComponent,
    AddMineralComponent,
    MineralDetailsComponent,
    UserLoginComponent,
    UserRegisterComponent,
    MainPageComponent,
    InformationComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MineralWorldService,
    UserServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
