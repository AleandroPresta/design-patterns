from abc import ABC, abstractmethod
from Image import Image

class Icon(ABC):
    @abstractmethod
    def draw(self, x: int, y: int) -> None:
        pass
    
class FileIcon(Icon):
    type: str
    image: Image
    
    def __init__(self, type: str, image: Image):
        self.type = type
        self.image = image
        
    def draw(self, x: int, y: int) -> None:
        print(f'Drawing {self.type} icon at position ({x}, {y})')
        

class FolderIcon(Icon):
    color: str
    image: Image
    
    def __init__(self, color: str, image: Image):
        self.color = color
        self.image = image
        
    def draw(self, x: int, y: int) -> None:
        print(f'Drawing {self.color} folder icon at position ({x}, {y})')