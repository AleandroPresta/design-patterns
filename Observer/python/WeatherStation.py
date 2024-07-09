from Subject import Subject
from Observer import Observer

class WeatherStation(Subject):
    observers: list = []
    weather: str
    
    def add_observer(self, observer: Observer) -> None:
        self.observers.append(observer)
        
    def remove_observer(self, observer: Observer) -> None:
        self.observers.remove(observer)
        
    def notify_observers(self) -> None:
        for observer in self.observers:
            observer.update(self.weather)
            
    def set_weather(self, weather: str) -> None:
        self.weather = weather
        self.notify_observers()
        
    