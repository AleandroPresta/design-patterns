from Visitor.python.Visitor import Book, Fruit, ItemElement
from Visitor import ShoppingCartVisitorImpl

def calculate_price(items: list) -> int:
    visitor = ShoppingCartVisitorImpl()
    sum: int = 0
    for item in items:
        sum += item.accept(visitor)
    return sum

def main() -> None:
    items: ItemElement = [
        Book(20, "1234"),
        Book(100, "5678"),
        Fruit(10, 2, "Banana"),
        Fruit(5, 5, "Apple")
    ]
    
    total: int = calculate_price(items)
    print(f"Total Cost = {total}")

if __name__ == "__main__":
    main()