from enum import Enum

class Priority(Enum):
    BASIC = 0
    INTERMEDIATE = 1
    CRITICAL = 2
    FATAL = 3
    

class Request:
    priority: Priority
    
    def __init__(self, priority: Priority):
        self.priority = priority
        
    
    def get_priority(self) -> Priority:
        return self.priority