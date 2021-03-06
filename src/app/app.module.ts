import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ApproutesModule } from './app-routing.module';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {DataTableModule} from 'primeng/datatable';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';
import { SharedModule } from './components/shared/shared-module';
import { ModalModule, BsModalService } from 'ngx-bootstrap';
import { UserFilterPipe } from './components/shared/data-grid/grid-filterpipe';
import { HttpModule } from '@angular/http';
import { CarouselModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    ApproutesModule,
    ReactiveFormsModule,
    DataTableModule,
    SliderModule,
    MultiSelectModule,
    DropdownModule,
    FormsModule,
    NoopAnimationsModule,
    SharedModule,
    ModalModule.forRoot(),
    HttpModule,
    CarouselModule
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
