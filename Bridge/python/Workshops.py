from abc import ABC, abstractmethod

class Workshop(ABC):
    @abstractmethod
    def work(self):
        pass
    

class Produce(Workshop):
    def work(self):
        print("Produced", end=" ")
        
        
class Assemble(Workshop):
    def work(self):
        print("Assembled", end=" ")