from abc import ABC, abstractmethod

class Device(ABC):
    @abstractmethod
    def turn_on(self) -> None:
        pass
    
    @abstractmethod
    def turn_off(self) -> None:
        pass
    

class Stereo(Device):
    def turn_on(self) -> None:
        print("Stereo is now on")
        
    def turn_off(self) -> None:
        print("Stereo is now off")
        
    def adjust_volume(self) -> None:
        print("Volume is adjusted")
        
    
class TV(Device):
    def turn_on(self) -> None:
        print("TV is now on")
        
    def turn_off(self) -> None:
        print("TV is now off")
        
    def change_channel(self) -> None:
        print("Channel is changed")