from CoffeeDecorator import CoffeeDecorator

class SugarDecorator(CoffeeDecorator): 
        def __init__(self, coffee):
            super().__init__(coffee)
        
        def get_cost(self) -> float:
            return self.coffee.get_cost() + 0.5
        
        def get_description(self) -> str:
            return self.coffee.get_description() + ", Sugar"