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
