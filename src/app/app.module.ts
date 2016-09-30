import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HomeModule} from "../home/home.module";
import {ServiceModule} from "../services/service.module";
@NgModule({
  imports: [ BrowserModule, HomeModule, ServiceModule.forRoot() ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }