from Memento import DocumentMemento
from abc import ABC, abstractmethod

class Originator(ABC):
    @abstractmethod
    def create_memento(self) -> 'DocumentMemento':
        pass
    
    @abstractmethod
    def restore_from_memento(self, memento: DocumentMemento) -> None:
        pass

class Document(Originator):
    content: str
    
    def __init__(self, content: str):
        self.content = content
        
    def write(self, text: str) -> None:
        self.content += text
        
    def get_content(self) -> str:
        return self.content
    
    def create_memento(self) -> 'DocumentMemento':
        return DocumentMemento(self.content)
    
    def restore_from_memento(self, memento: DocumentMemento) -> None:
        self.content = memento.get_state()