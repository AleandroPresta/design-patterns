from abc import ABC, abstractmethod
from Workshops import Workshop

class Vehicle(ABC):
    workshop1: Workshop
    workshop2: Workshop
    
    def __init__(self, workshop1: Workshop, workshop2: Workshop):
        self.workshop1 = workshop1
        self.workshop2 = workshop2
        
        
    @abstractmethod
    def manufacture(self) -> None:
        pass
    

class Car(Vehicle):
    def __init__(self, workshop1: Workshop, workshop2: Workshop):
        super().__init__(workshop1, workshop2)
        
    def manufacture(self) -> None:
        print("Car ", end="")
        self.workshop1.work()
        self.workshop2.work()
        
        
class Bike(Vehicle):
    def __init__(self, workshop1: Workshop, workshop2: Workshop):
        super().__init__(workshop1, workshop2)
        
    def manufacture(self) -> None:
        print("Bike ", end="")
        self.workshop1.work()
        self.workshop2.work()