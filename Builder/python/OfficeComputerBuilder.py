from Builder import Builder
from Computer import Computer

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