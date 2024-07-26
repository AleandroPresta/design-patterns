from abc import ABC, abstractmethod
from typing import final

class BeverageMaker(ABC):
    @abstractmethod
    def brew(self) -> None:
        pass

    @abstractmethod
    def addCondiments(self) -> None:
        pass

    def boilWater(self) -> None:
        print("Boiling water")

    def pourInCup(self) -> None:
        print("Pouring into cup")

    @final
    def makeBeverage(self) -> None:
        self.boilWater()
        self.brew()
        self.pourInCup()
        self.addCondiments()
        
class TeaMaker(BeverageMaker):
    def brew(self) -> None:
        print("Steeping the tea")

    def addCondiments(self) -> None:
        print("Adding lemon")
        
class CoffeeMaker(BeverageMaker):
    def brew(self) -> None:
        print("Dripping coffee through filter")

    def addCondiments(self) -> None:
        print("Adding sugar and milk")
