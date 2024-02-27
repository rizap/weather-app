import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {AppRoutingModule} from "./app.routing";
import {CurrentWeatherComponent} from "./current-weather/current-weather.component";
import {ForecastComponent} from "./forecast/forecast.component";
import {WeatherService} from "./shared/weather.service";
import {HttpClientModule} from "@angular/common/http";
import { WeatherImageComponent } from './weather-image/weather-image.component';
import {LocalStorageService} from "./shared/local-storage.service";

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, CurrentWeatherComponent, ForecastComponent, WeatherImageComponent],
  providers: [WeatherService, LocalStorageService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
