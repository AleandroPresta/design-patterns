from Builder import Builder
from Computer import Computer

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