"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fruit = exports.Book = void 0;
class Book {
    constructor(price, isbnNumber) {
        this.price = price;
        this.isbnNumber = isbnNumber;
    }
    getPrice() {
        return this.price;
    }
    getIsbnNumber() {
        return this.isbnNumber;
    }
    accept(visitor) {
        return visitor.visit(this);
    }
}
exports.Book = Book;
class Fruit {
    constructor(pricePerKg, weight, name) {
        this.pricePerKg = pricePerKg;
        this.weight = weight;
        this.name = name;
    }
    getPricePerKg() {
        return this.pricePerKg;
    }
    getWeight() {
        return this.weight;
    }
    getName() {
        return this.name;
    }
    accept(visitor) {
        return visitor.visit(this);
    }
}
exports.Fruit = Fruit;
