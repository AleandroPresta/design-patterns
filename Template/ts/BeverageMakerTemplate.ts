export abstract class BeverageMaker {
    // This method should be final, but TypeScript does not support it
    public makeBeverage(): void {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    }

    public boilWater(): void {
        console.log('Boiling water');
    }

    public pourInCup(): void {
        console.log('Pouring in cup');
    }

    public abstract brew(): void;

    public abstract addCondiments(): void;
}

export class TeaMaker extends BeverageMaker {
    public brew(): void {
        console.log('Steeping the tea');
    }

    public addCondiments(): void {
        console.log('Adding lemon');
    }
}

export class CoffeeMaker extends BeverageMaker {
    public brew(): void {
        console.log('Dripping coffee through filter');
    }

    public addCondiments(): void {
        console.log('Adding sugar and milk');
    }
}