import { Coffee } from "./Coffee";

export abstract class CoffeeDecorator implements Coffee {
    protected decoratedCoffee: Coffee;

    constructor(decoratedCoffee: Coffee) {
        this.decoratedCoffee = decoratedCoffee;
    }

    getCost(): number {
        return this.decoratedCoffee.getCost();
    }

    getDescription(): string {
        return this.decoratedCoffee.getDescription();
    }
}

export class MilkDecorator extends CoffeeDecorator {
    constructor(decoratedCoffee: Coffee) {
        super(decoratedCoffee);
    }

    getCost(): number {
        return super.getCost() + 0.5;
    }

    getDescription(): string {
        return super.getDescription() + ', milk';
    }
}

export class SugarDecorator extends CoffeeDecorator {
    constructor(decoratedCoffee: Coffee) {
        super(decoratedCoffee);
    }

    getCost(): number {
        return super.getCost() + 0.2;
    }

    getDescription(): string {
        return super.getDescription() + ', sugar';
    }
}