import { ItemElement, Book, Fruit } from "./Item";
import { ShoppingCartVisitor, ShoppingCartVisitorImpl } from "./Visitor";

function calculatePrice(items: ItemElement[]): number {
    const visitor: ShoppingCartVisitor = new ShoppingCartVisitorImpl();
    let sum: number = 0;
    items.forEach(item => {
        sum += item.accept(visitor);
    });
    return sum;
}

const items: ItemElement[] = [
    new Book(20, "1234"),
    new Book(100, "5678"),
    new Fruit(10, 2, "Banana"),
    new Fruit(5, 5, "Apple")
];

const total: number = calculatePrice(items);

console.log(`Total Cost = ${total}`);