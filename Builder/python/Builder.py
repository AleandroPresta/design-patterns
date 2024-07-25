from abc import ABC, abstractmethod
from Computer import Computer

class Builder(ABC):
    @abstractmethod
    def build_cpu(self) -> None:
        pass

    @abstractmethod
    def build_ram(self) -> None:
        pass

    @abstractmethod
    def build_storage(self) -> None:
        pass

    @abstractmethod
    def get_result(self) -> Computer:
        pass
    
class OfficeComputerBuilder(Builder):
    
    computer: Computer = Computer()
    
    def build_cpu(self) -> None:
        self.computer.set_cpu('Intel Core i5-9400F')
        
    def build_ram(self) -> None:
        self.computer.set_ram('Corsair Vengeance LPX 8GB')
        
    def build_storage(self) -> None:
        self.computer.set_storage('Seagate Barracuda 1TB')
        
    def get_result(self) -> Computer:
        return self.computer
    
class GamingComputerBuilder(Builder):
    
    computer: Computer = Computer()
    
    def build_cpu(self) -> None:
        self.computer.set_cpu('Intel Core i9-9900K')
        
    def build_ram(self) -> None:
        self.computer.set_ram('Corsair Vengeance LPX 16GB')
        
    def build_storage(self) -> None:
        self.computer.set_storage('Seagate Barracuda 2TB')
        
    def get_result(self) -> Computer:
        return self.computer