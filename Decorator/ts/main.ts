import { Coffee, PlainCoffe } from "./Coffee";
import { MilkDecorator, SugarDecorator } from "./CoffeeDecorator";

const coffee: Coffee = new PlainCoffe();
console.log(`Description: ${coffee.getDescription()}`);
console.log(`Cost: ${coffee.getCost()}$`);

const milkCoffee = new MilkDecorator(coffee);
console.log(`Description: ${milkCoffee.getDescription()}`);
console.log(`Cost: ${milkCoffee.getCost()}$`);

const sugarCoffee = new SugarDecorator(coffee);
console.log(`Description: ${sugarCoffee.getDescription()}`);
console.log(`Cost: ${sugarCoffee.getCost()}$`);