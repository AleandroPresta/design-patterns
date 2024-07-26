"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeMaker = exports.TeaMaker = exports.BeverageMaker = void 0;
class BeverageMaker {
    // This method should be final, but TypeScript does not support it
    makeBeverage() {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    }
    boilWater() {
        console.log('Boiling water');
    }
    pourInCup() {
        console.log('Pouring in cup');
    }
}
exports.BeverageMaker = BeverageMaker;
class TeaMaker extends BeverageMaker {
    brew() {
        console.log('Steeping the tea');
    }
    addCondiments() {
        console.log('Adding lemon');
    }
}
exports.TeaMaker = TeaMaker;
class CoffeeMaker extends BeverageMaker {
    brew() {
        console.log('Dripping coffee through filter');
    }
    addCondiments() {
        console.log('Adding sugar and milk');
    }
}
exports.CoffeeMaker = CoffeeMaker;
