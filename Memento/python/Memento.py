from abc import ABC, abstractmethod

class Memento(ABC):
    state: str
    
    @abstractmethod
    def get_state(self) -> str:
        pass
    
    
class DocumentMemento(Memento):
    def __init__(self, state: str):
        self.state = state
        
    def get_state(self) -> str:
        return self.state