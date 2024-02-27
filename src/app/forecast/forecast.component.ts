import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {WeatherService} from "../shared/weather.service";
import {Weather} from "../shared/weather";
import {Forecast} from "../shared/forecast";
import {LocalStorageService} from "../shared/local-storage.service";

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  forecastWeather: Forecast;
  constructor(private routerParam: ActivatedRoute, private weatherService: WeatherService, private route: Router, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    console.log(this.routerParam.snapshot.params);
    const zipCode = this.routerParam.snapshot.params.zipcode;
    console.log(zipCode);
        //getForecastWeather
    if (localStorage.getItem('location')) {
      const weatherList = JSON.parse(localStorage.getItem('location'));
      const weather: Weather = weatherList.find(row => row.zipCode === zipCode);
      this.weatherService.getForecastWeather(weather.coord.lat, weather.coord.lon).subscribe(data => {
        console.log(data);
        this.forecastWeather = data;
      })
    } else {
      this.route.navigateByUrl('/');
    }
  }

}
