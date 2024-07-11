from abc import ABC, abstractmethod

class Task(ABC):
    @abstractmethod
    def get_title(self) -> str:
        pass
    
    @abstractmethod
    def set_title(self, title: str) -> None:
        pass
    
    @abstractmethod
    def display(self) -> None:
        pass
    
    
class SimpleTask(Task):
    title: str
    
    def __init__(self, title: str) -> None:
        self.title = title
        
    def get_title(self) -> str:
        return self.title
    
    def set_title(self, title: str) -> None:
        self.title = title
        
    def display(self) -> None:
        print(f"Simple Task: {self.title}")
        

class TaskList(Task):
    title: str
    tasks: 'list[Task]'
    
    def __init__(self, title: str) -> None:
        self.title = title
        self.tasks = []
        
        
    def get_title(self) -> str:
        return self.title
    
    
    def set_title(self, title: str) -> None:
        self.title = title
        
        
    def add_task(self, task: Task) -> None:
        self.tasks.append(task)
        
        
    def remove_task(self, task: Task) -> None:
        self.tasks.remove(task)
        
        
    def display(self) -> None:
        print(f"Task List: {self.title}")
        for task in self.tasks:
            task.display()