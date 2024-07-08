from abc import ABC, abstractmethod

from Observer import Observer

class Subject(ABC):
    @abstractmethod
    def add_observer(self, observer: Observer) -> None:
        pass
    
    @abstractmethod
    def remove_observer(self, observer: Observer) -> None:
        pass
    
    @abstractmethod
    def notify_observers(self) -> None:
        pass