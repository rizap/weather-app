export interface Weather {
    "zipCode": number,
    "coord": {
        "lon": number,
        "lat": number
    },
    "weather": [
        {
            "id": number,
            "main": string,
            "description": string,
            "icon": string
        }
    ],
    "base": string,
    "main": {
        "temp": number,
        "feels_like": number,
        "temp_min": number,
        "temp_max": number,
        "pressure": number,
        "humidity": number
    },
    "visibility": number,
    "dt": number,
    "timezone": number,
    "id": number,
    "name": string,
    "cod": number,
    "dt_txt": string,
    "temp": {
        "day": number,
        "min": number,
        "max": number,
        "night": number,
        "eve": number,
        "morn": number
    },
}
