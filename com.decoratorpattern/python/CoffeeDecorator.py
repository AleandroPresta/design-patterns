from Coffee import Coffee

class CoffeeDecorator(Coffee):
    
    coffee: Coffee
    
    def __init__(self, coffee: Coffee):
        self.coffee = coffee

    def get_cost(self) -> float:
        return self.coffee.get_cost()
    
    def get_description(self) -> str:
        return self.coffee.get_description()