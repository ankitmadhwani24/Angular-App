import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddmemberComponent } from './addmember/addmember.component';
import { SpaceTicketsComponent } from './space-tickets/space-tickets.component';
import { SpacedetailsComponent } from './spacedetails/spacedetails.component';

const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent 
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'addmember',
        component: AddmemberComponent
    },
    {
        path: 'spacetickets',
        component: SpaceTicketsComponent
    },
    {
        path: 'spacedetails',
        component: SpacedetailsComponent
    }

];

export const AppRoutings: ModuleWithProviders = RouterModule.forRoot(appRoutes); 