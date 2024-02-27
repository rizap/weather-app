import {Injectable} from "@angular/core";
import {Weather} from "./weather";

@Injectable()
export class LocalStorageService {

    private _locationData: Weather[];

    set locationData(value: Weather[]) {
        this._locationData = value;
        localStorage.setItem('location', JSON.stringify(value));
    }
    get locationData() {
        if (localStorage.getItem('location')) {
            this._locationData = JSON.parse(localStorage.getItem('location'));
            return this._locationData;
        }
    }

    getLocationByZipcode(zipcode: number) {
        this.locationData = this.locationData?.filter(data => data.zipCode !== zipcode);
        return this.locationData;
    }
}
