from Coffee import Coffee

class PlainCoffee(Coffee):
    def get_cost(self) -> float:
        return 2.0
    
    def get_description(self) -> str:
        return "Plain Coffee"