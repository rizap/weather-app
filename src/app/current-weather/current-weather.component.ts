import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../shared/weather.service";
import {Weather} from "../shared/weather";
import {LocalStorageService} from "../shared/local-storage.service";

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  US_COUNTRY_CODE = 'US';
  zipcode: number;
  weather: Weather;
  weatherList: Weather[];
  constructor(private weatherService: WeatherService, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.weatherList = this.localStorageService.locationData ? this.localStorageService.locationData : [];
  }

  onAddLocation() {
    this.weatherService.getCurrentWeather(this.zipcode, this.US_COUNTRY_CODE).subscribe(r => {
      if (r) {
        this.weather = r;
        this.weather.zipCode = this.zipcode;
        if (this.weatherList?.length > 0) {
          this.weatherList = this.localStorageService.getLocationByZipcode(this.zipcode);
        }
        debugger
        this.weatherList.push(this.weather);
        this.localStorageService.locationData = this.weatherList;
      }
    });
  }

  onRemove(zipCode:number) {
    this.localStorageService.getLocationByZipcode(zipCode);
    this.weatherList = this.localStorageService.locationData;
  }
}
