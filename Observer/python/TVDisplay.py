from Observer import Observer

class TVDisplay(Observer):
    weather: str
    
    def update(self, weather: str) -> None:
        self.weather = weather
        self.display()
        
    
    def display(self) -> None:
        print(f"TV Display: {self.weather}")