from abc import ABC, abstractmethod
from Devices import Device, Stereo, TV

class Command(ABC):
    
    @abstractmethod
    def execute() -> None:
        pass
    
class TurnOnCommand(Command):
    device: Device
    
    def __init__(self, device: Device):
        self.device = device
        
    def execute(self) -> None:
        self.device.turn_on()
        
class TurnOffCommand(Command):
    device: Device
    
    def __init__(self, device: Device):
        self.device = device
        
    def execute(self) -> None:
        self.device.turn_off()
        
class AdjustVolumeCommand(Command):
    stereo: Stereo
    
    def __init__(self, stereo: Stereo):
        self.stereo = stereo
        
    def execute(self) -> None:
        self.stereo.adjust_volume()
        

class ChangeChannelCommand(Command):
    tv: TV
    
    def __init__(self, tv: TV):
        self.tv = tv
        
    def execute(self) -> None:
        self.tv.change_channel()