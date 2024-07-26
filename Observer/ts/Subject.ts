import { Observer } from "./Observer";

export interface Subject {
    addObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
}

export class WeatherStation implements Subject {
    private observers: Observer[] = [];
    private weather: string;

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(o => o !== observer);
    }

    notifyObservers(): void {
        this.observers.forEach(observer => observer.update(this.weather));
    }

    setWeather(weather: string): void {
        this.weather = weather;
        this.notifyObservers();
    }
}