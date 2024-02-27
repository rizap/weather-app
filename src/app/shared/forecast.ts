import {Weather} from "./weather";

export interface Forecast {
    "cod": string,
    "message": number,
    "cnt": number,
    "list": Array<Weather>,
    "city": {
        "id": number,
        "name": string,
        "coord": {
            "lat": number,
            "lon": number
        },
        "country": string,
        "timezone": number,
        "sunrise": number,
        "sunset": number
    }
}

export interface Temperature {
    "temp": {
        "day": 50.4,
        "min": 35.15,
        "max": 59.95,
        "night": 49.17,
        "eve": 52.14,
        "morn": 37.17
    },
}
