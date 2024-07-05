from sorting_strategy import SortingStrategy

class SortingContext(object):
    
    strategy: SortingStrategy
    
    def __init__(self, strategy):
        self.strategy = strategy

    def set_sorting_strategy(self, strategy):
        self.strategy = strategy
        
    def perform_sort(self, data) -> list:
        return self.strategy.sort(data)