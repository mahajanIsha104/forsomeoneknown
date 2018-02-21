import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ApproutesModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    ApproutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
