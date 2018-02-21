# Realapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

## To Start This Project
after cloning run below command This page only serves static contents
npm install

# Angular4
## components->

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

## Routers
//see file app.routing.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from '@angular/router';
import { RouterModule } from '@angular/router';
import {HomePageComponent} from '../app/components/home-page/home-page.component';
const appRoutes:Routes=[
  {path:'home',component:HomePageComponent},
  {path:'**',component:HomePageComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes,{enableTracing:false,useHash:true})
  ],
  declarations: [],
  exports:[RouterModule]
})
export class ApproutesModule { }

## Route Load Via
<app-nav-bar></app-nav-bar>
<router-outlet></router-outlet>  // This line loads the routes
