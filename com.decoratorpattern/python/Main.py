from Coffee import Coffee
from PlainCoffee import PlainCoffee
from MilkDecorator import MilkDecorator
from SugarDecorator import SugarDecorator

class Main:
    
    def main() -> None:
        coffee1: Coffee = PlainCoffee()
        print(f"Cost: {coffee1.get_cost()}") # Cost: 2.0
        print(f"Description: {coffee1.get_description()}")
        
        coffee2: Coffee = MilkDecorator(PlainCoffee())
        print(f"Cost: {coffee2.get_cost()}")
        print(f"Description: {coffee2.get_description()}")
    
        coffee3: Coffee = SugarDecorator(PlainCoffee())
        print(f"Cost: {coffee3.get_cost()}")
        print(f"Description: {coffee3.get_description()}")
        
        coffee4: Coffee = MilkDecorator(SugarDecorator(PlainCoffee()))
        print(f"Cost: {coffee4.get_cost()}")
        print(f"Description: {coffee4.get_description()}")
    
    if __name__ == "__main__":
        main()