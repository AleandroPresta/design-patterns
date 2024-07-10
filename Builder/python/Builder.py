from abc import ABC, abstractmethod

class Builder(ABC):
    @abstractmethod
    def build_cpu(self):
        pass

    @abstractmethod
    def build_ram(self):
        pass

    @abstractmethod
    def build_storage(self):
        pass

    @abstractmethod
    def get_result(self):
        pass