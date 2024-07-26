import { WeatherStation } from "./Subject";
import { Observer, PhoneDisplay, TVDisplay } from './Observer';


const weatherStation: WeatherStation = new WeatherStation();
const phoneDisplay: Observer = new PhoneDisplay();
const tvDisplay: Observer = new TVDisplay();

weatherStation.addObserver(phoneDisplay);
weatherStation.addObserver(tvDisplay);

weatherStation.setWeather('sunny');