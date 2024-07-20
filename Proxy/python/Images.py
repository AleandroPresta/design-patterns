from abc import ABC, abstractmethod

class Image(ABC):
    @abstractmethod
    def display(self) -> None:
        pass
    

class RealImage(Image):
    filename: str
    
    def __init__(self, filename: str):
        self.filename = filename
        self.load_image_from_disk()
        
    def load_image_from_disk(self) -> None:
        print(f"Loading {self.filename}")
        
    def display(self) -> None:
        print(f"Displaying {self.filename}")
        
        
class ProxyImage(Image):
    real_image: Image = None
    filename: str
    
    def __init__(self, filename: str):
        self.filename = filename
        
    
    def display(self) -> None:
        if self.real_image is None:
            self.real_image = RealImage(self.filename)
        self.real_image.display()
    