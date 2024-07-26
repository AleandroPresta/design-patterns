import { ShoppingCartVisitor } from "./Visitor";

export interface ItemElement {
    accept(visitor: ShoppingCartVisitor): number;
}

export class Book implements ItemElement {

    private price: number;
    private isbnNumber: string;

    constructor(price: number, isbnNumber: string) {
        this.price = price;
        this.isbnNumber = isbnNumber;
    }

    getPrice(): number {
        return this.price;
    }

    getIsbnNumber(): string {
        return this.isbnNumber;
    }

    accept(visitor: ShoppingCartVisitor): number {
        return visitor.visit(this);
    }

}

export class Fruit implements ItemElement {

    private pricePerKg: number;
    private weight: number;
    private name: string;

    constructor(pricePerKg: number, weight: number, name: string) {
        this.pricePerKg = pricePerKg;
        this.weight = weight;
        this.name = name;
    }

    getPricePerKg(): number {
        return this.pricePerKg;
    }

    getWeight(): number {
        return this.weight;
    }

    getName(): string {
        return this.name;
    }

    accept(visitor: ShoppingCartVisitor): number {
        return visitor.visit(this);
    }

}
