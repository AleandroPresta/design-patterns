"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SugarDecorator = exports.MilkDecorator = exports.CoffeeDecorator = void 0;
class CoffeeDecorator {
    constructor(decoratedCoffee) {
        this.decoratedCoffee = decoratedCoffee;
    }
    getCost() {
        return this.decoratedCoffee.getCost();
    }
    getDescription() {
        return this.decoratedCoffee.getDescription();
    }
}
exports.CoffeeDecorator = CoffeeDecorator;
class MilkDecorator extends CoffeeDecorator {
    constructor(decoratedCoffee) {
        super(decoratedCoffee);
    }
    getCost() {
        return super.getCost() + 0.5;
    }
    getDescription() {
        return super.getDescription() + ', milk';
    }
}
exports.MilkDecorator = MilkDecorator;
class SugarDecorator extends CoffeeDecorator {
    constructor(decoratedCoffee) {
        super(decoratedCoffee);
    }
    getCost() {
        return super.getCost() + 0.2;
    }
    getDescription() {
        return super.getDescription() + ', sugar';
    }
}
exports.SugarDecorator = SugarDecorator;
