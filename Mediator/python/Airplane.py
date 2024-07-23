from __future__ import annotations
from abc import ABC, abstractmethod

# Mediator interface
class AirTrafficControlTower(ABC):
    @abstractmethod
    def request_takeoff(self, airplane: Airplane) -> None:
        pass

    @abstractmethod
    def request_landing(self, airplane: Airplane) -> None:
        pass
    

# Concrete mediator
class AirportControlTower(AirTrafficControlTower):
    def request_takeoff(self, airplane: Airplane) -> None:
        airplane.notify_air_traffic_control('Requesting takeoff')
        
    def request_landing(self, airplane: Airplane) -> None:
        airplane.notify_air_traffic_control('Requesting landing')
        

# Colleague interface
class Airplane(ABC):
    @abstractmethod
    def request_takeoff(self) -> None:
        pass

    @abstractmethod
    def request_landing(self) -> None:
        pass

    @abstractmethod
    def notify_air_traffic_control(self, message: str) -> None:
        pass
    

# Concrete colleague
class CommercialAirplane(Airplane):
    mediator: AirTrafficControlTower
    
    def __init__(self, mediator: AirTrafficControlTower) -> None:
        self.mediator = mediator
        
    def request_takeoff(self) -> None:
        self.mediator.request_takeoff(self)
        
    def request_landing(self) -> None:
        self.mediator.request_landing(self)
        
    def notify_air_traffic_control(self, message: str) -> None:
        print(f'Commercial Airplane: {message}')