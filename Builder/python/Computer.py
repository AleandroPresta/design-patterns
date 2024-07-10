class Computer:
    cpu: str
    ram: str
    storage: str
    
    def __init__(self) -> None:
        self.cpu = ''
        self.ram = ''
        self.storage = ''
    
    def set_cpu(self, cpu: str) -> None:
        self.cpu = cpu
        
    def set_ram(self, ram: str) -> None:
        self.ram = ram
        
    def set_storage(self, storage: str) -> None:
        self.storage = storage
        
    def display_info(self) -> None:
        print("Computer configuration:")
        print(f"CPU: {self.cpu}")
        print(f"RAM: {self.ram}")
        print(f"Storage: {self.storage}")
        