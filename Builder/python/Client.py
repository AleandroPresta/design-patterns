from GamingComputerBuilder import GamingComputerBuilder
from Builder import Builder

def main() -> None:
    builder: Builder = GamingComputerBuilder()
    builder.build_cpu()
    builder.build_ram()
    builder.build_storage()
    computer = builder.get_result()
    computer.display_info()
    

if __name__ == '__main__':
    main()