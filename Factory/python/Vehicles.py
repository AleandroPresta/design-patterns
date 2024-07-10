from abc import ABC, abstractmethod

class Vehicle(ABC):
    @abstractmethod
    def print_vehicle(self) -> None:
        pass
    

class TwoWheeler(Vehicle):
    def print_vehicle(self) -> None:
        print("I'm a two wheeler")
        

class FourWheeler(Vehicle):
    def print_vehicle(self) -> None:
        print("I'm a four wheeler")