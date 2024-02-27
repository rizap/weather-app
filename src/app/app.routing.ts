import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CurrentWeatherComponent} from "./current-weather/current-weather.component";
import {ForecastComponent} from "./forecast/forecast.component";

const routes: Routes = [{ path:'', component: CurrentWeatherComponent },
    {path: 'forecast/:zipcode', component: ForecastComponent},
    {path: '**', component: CurrentWeatherComponent}]

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
