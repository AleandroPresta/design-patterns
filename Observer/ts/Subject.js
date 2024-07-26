"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherStation = void 0;
class WeatherStation {
    constructor() {
        this.observers = [];
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        this.observers = this.observers.filter(o => o !== observer);
    }
    notifyObservers() {
        this.observers.forEach(observer => observer.update(this.weather));
    }
    setWeather(weather) {
        this.weather = weather;
        this.notifyObservers();
    }
}
exports.WeatherStation = WeatherStation;
