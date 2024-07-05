from SortingStrategy import SortingStrategy

class SortingContext(object):
    
    Strategy: SortingStrategy
    
    def __init__(self, strategy):
        self.Strategy = strategy

    def set_sorting_strategy(self, strategy):
        self.Strategy = strategy
        
    def perform_sort(self, data) -> list:
        return self.Strategy.sort(data)