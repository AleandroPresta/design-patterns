"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = require("./Item");
const Visitor_1 = require("./Visitor");
function calculatePrice(items) {
    const visitor = new Visitor_1.ShoppingCartVisitorImpl();
    let sum = 0;
    items.forEach(item => {
        sum += item.accept(visitor);
    });
    return sum;
}
const items = [
    new Item_1.Book(20, "1234"),
    new Item_1.Book(100, "5678"),
    new Item_1.Fruit(10, 2, "Banana"),
    new Item_1.Fruit(5, 5, "Apple")
];
const total = calculatePrice(items);
console.log(`Total Cost = ${total}`);
