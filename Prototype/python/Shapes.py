from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def clone(self) -> 'Shape':
        pass
    
    
    @abstractmethod
    def draw(self) -> None:
        pass
    
    
class Circle(Shape):
    color: str
    
    def __init__(self, color: str):
        self.color = color
        
    
    def clone(self) -> 'Shape':
        return Circle(self.color)
    
    
    def draw(self) -> None:
        print(f"Drawing a {self.color} circle")