from __future__ import annotations
from abc import ABC, abstractmethod

'''
    Visitable interface and elements
'''
class ItemElement(ABC):
    @abstractmethod
    def accept(self, visitor: ShoppingCartVisitor) -> int:
        pass
    

class Book(ItemElement):
    
    price: int
    is_bn_number: str
    
    def __init__(self, cost: int, isbn: str):
        self.price = cost
        self.is_bn_number = isbn
        
    def get_price(self) -> int:
        return self.price
    
    def get_isbn_number(self) -> str:
        return self.is_bn_number
    
    def accept(self, visitor: ShoppingCartVisitor) -> int:
        return visitor.visit(self)
    

class Fruit(ItemElement):
    
    price_per_kg: int
    weight: int
    name: str
    
    def __init__(self, price: int, wt: int, nm: str):
        self.price_per_kg = price
        self.weight = wt
        self.name = nm
        
    def get_price_per_kg(self) -> int:
        return self.price_per_kg
    
    def get_weight(self) -> int:
        return self.weight
    
    def get_name(self) -> str:
        return self.name
    
    def accept(self, visitor: ShoppingCartVisitor) -> int:
        return visitor.visit(self)
    
'''
    Visitor interface and its implementation
'''
class ShoppingCartVisitor(ABC):
    @abstractmethod
    def visit(self, item: Book) -> int:
        pass
    
    @abstractmethod
    def visit(self, item: Fruit) -> int:
        pass
    
    
class ShoppingCartVisitorImpl(ShoppingCartVisitor):
    
    def visit(self, book: Book) -> int:
        cost: int = 0
        # apply 5$ discount if book price is greater than 50
        if book.get_price() > 50:
            cost = book.get_price() - 5
        else:
            cost = book.get_price()
        print(f"Book ISBN:: {book.get_isbn_number()} cost = {cost}")
        return cost
    
    
    def visit(self, fruit: Fruit) -> int:
        cost: int = fruit.get_price_per_kg() * fruit.get_weight()
        print(f"{fruit.get_name()} cost = {cost}")
        return cost