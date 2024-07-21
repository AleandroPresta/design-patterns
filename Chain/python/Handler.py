from abc import ABC, abstractmethod
from Request import Priority

class SupportHandler(ABC):
    @abstractmethod
    def handle_request(self, request) -> None:
        pass
    
    @abstractmethod
    def set_next_handler(self, handler) -> None:
        pass


class Level1SupportHandler(SupportHandler):
    next_handler: SupportHandler
    
    def handle_request(self, request) -> None:
        if request.get_priority() == Priority.BASIC:
            print("Level 1 support is handling the request.")
        else:
            self.next_handler.handle_request(request)
            
    def set_next_handler(self, handler: SupportHandler) -> None:
        self.next_handler = handler
        
    
class Level2SupportHandler(SupportHandler):
    next_handler: SupportHandler
    
    def handle_request(self, request) -> None:
        if request.get_priority() == Priority.INTERMEDIATE:
            print("Level 2 support is handling the request.")
        else:
            self.next_handler.handle_request(request)
            
    def set_next_handler(self, handler: SupportHandler) -> None:
        self.next_handler = handler
        

class Level3SupportHandler(SupportHandler):
    next_handler: SupportHandler
    
    def handle_request(self, request) -> None:
        if request.get_priority() == Priority.CRITICAL:
            print("Level 3 support is handling the request.")
        else:
            print("No support is available for this request.")
            
    def set_next_handler(self, handler: SupportHandler) -> None:
        self.next_handler = handler