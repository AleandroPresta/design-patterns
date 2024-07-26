import { BeverageMaker, TeaMaker, CoffeeMaker } from "./BeverageMakerTemplate";

console.log('Making tea: ');
const teaMaker: BeverageMaker = new TeaMaker();
teaMaker.makeBeverage();

console.log('Making coffee: ');
const coffeeMaker: BeverageMaker = new CoffeeMaker();
coffeeMaker.makeBeverage();