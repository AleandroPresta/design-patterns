"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCartVisitorImpl = void 0;
const Item_1 = require("./Item");
class ShoppingCartVisitorImpl {
    // Because typescript does not support method overloading, 
    // we need to use the instanceof operator to determine the type of the item
    visit(item) {
        if (item instanceof Item_1.Book) {
            return this.visitBook(item);
        }
        else if (item instanceof Item_1.Fruit) {
            return this.visitFruit(item);
        }
        return 0;
    }
    visitBook(book) {
        let cost = book.getPrice();
        if (cost > 50) {
            cost -= 5;
        }
        return cost;
    }
    visitFruit(fruit) {
        return fruit.getPricePerKg() * fruit.getWeight();
    }
}
exports.ShoppingCartVisitorImpl = ShoppingCartVisitorImpl;
