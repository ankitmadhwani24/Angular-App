import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutings } from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddmemberComponent } from './addmember/addmember.component';
import { SpaceTicketsComponent } from './space-tickets/space-tickets.component';
import { SpacedetailsComponent } from './spacedetails/spacedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AddmemberComponent,
    SpaceTicketsComponent,
    SpacedetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutings
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
