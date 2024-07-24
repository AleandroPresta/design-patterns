from typing import List
from Memento import Memento

class History:
    mementos: List[Memento] = []
    
    def __init__(self):
        self.mementos = []
        
    def add_memento(self, memento: Memento) -> None:
        self.mementos.append(memento)
        
    def get_memento(self, index: int) -> Memento:
        return self.mementos[index]