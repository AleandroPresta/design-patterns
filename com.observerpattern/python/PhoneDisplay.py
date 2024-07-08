from Observer import Observer

class PhoneDisplay(Observer):
    weather: str
    
    def update(self, weather: str) -> None:
        self.weather = weather
        self.display()
        
    
    def display(self) -> None:
        print(f"Phone Display: {self.weather}")
        