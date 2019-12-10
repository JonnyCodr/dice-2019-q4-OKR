import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartComponent } from './components/charts/bar-chart/bar-chart.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
