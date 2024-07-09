from WeatherStation import WeatherStation
from PhoneDisplay import PhoneDisplay
from TVDisplay import TVDisplay
from Observer import Observer
from Subject import Subject

def main() -> None:
    weather_station: Subject = WeatherStation()
    phone_display: Observer = PhoneDisplay()
    tv_display: Observer = TVDisplay()

    weather_station.add_observer(phone_display)
    weather_station.add_observer(tv_display)
    
    print(weather_station.observers)
    
    weather_station.set_weather("Sunny")
    
if __name__ == "__main__":
    main()