from GamingComputerBuilder import GamingComputerBuilder
from OfficeComputerBuilder import OfficeComputerBuilder
from Director import Director
from Builder import Builder
from Computer import Computer

def main() -> None:
    gaming_computer_builder: Builder = GamingComputerBuilder()
    director = Director()
    
    director.construct(gaming_computer_builder)
    gaming_computer: Computer = gaming_computer_builder.get_result()
    
    gaming_computer.display_info()
    
    office_computer_builder: Builder = OfficeComputerBuilder()
    
    director.construct(office_computer_builder)
    office_computer: Computer = office_computer_builder.get_result()
    
    office_computer.display_info()
    

if __name__ == '__main__':
    main()