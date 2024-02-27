import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Weather} from "./weather";
import {Forecast} from "./forecast";

@Injectable()
export class WeatherService {
    readonly API_KEY: string = '5a4b2d457ecbef9eb2a71e480b947604';
    constructor(private http: HttpClient) {}

    getCurrentWeather(zipcode: number, countryCode: string) {
        return this.http.get<Weather>(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},${countryCode}&appid=${this.API_KEY}&units=imperial`)
    }

    getForecastWeather(latitude: number, longitude: number) {
        return this.http.get<Forecast>(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&cnt=5&appid=${this.API_KEY}&units=imperial`);
        //return this.http.get<Forecast>(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${this.API_KEY}&units=imperial`);
    }
}
