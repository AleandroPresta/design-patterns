from abc import ABC, abstractmethod

class Workshop(ABC):
    @abstractmethod
    def work(self) -> None:
        pass
    

class Produce(Workshop):
    def work(self) -> None:
        print("Produced", end=" ")
        
        
class Assemble(Workshop):
    def work(self) -> None:
        print("Assembled", end=" ")