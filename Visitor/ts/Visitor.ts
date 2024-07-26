import { Book, Fruit, ItemElement } from './Item';

export interface ShoppingCartVisitor {
    visit(item: ItemElement): number;
}

export class ShoppingCartVisitorImpl implements ShoppingCartVisitor {
    // Because typescript does not support method overloading, 
    // we need to use the instanceof operator to determine the type of the item
    visit(item: ItemElement): number {
        if (item instanceof Book) {
            return this.visitBook(item);
        } else if (item instanceof Fruit) {
            return this.visitFruit(item);
        }
        return 0;
    }

    private visitBook(book: Book): number {
        let cost: number = book.getPrice();
        if (cost > 50) {
            cost -= 5;
        }
        return cost;
    }

    private visitFruit(fruit: Fruit): number {
        return fruit.getPricePerKg() * fruit.getWeight();
    }
}