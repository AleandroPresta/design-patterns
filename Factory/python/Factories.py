from abc import ABC, abstractmethod
from Vehicles import Vehicle, TwoWheeler, FourWheeler

class Factory(ABC):
    @abstractmethod
    def create_vehicle(self) -> None:
        pass
    

class TwoWheelerFactory(Factory):
    def create_vehicle(self) -> Vehicle:
        return TwoWheeler()
    
    
class FourWheelerFactory(Factory):
    def create_vehicle(self) -> Vehicle:
        return FourWheeler()