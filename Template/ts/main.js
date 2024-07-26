"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BeverageMakerTemplate_1 = require("./BeverageMakerTemplate");
console.log('Making tea: ');
const teaMaker = new BeverageMakerTemplate_1.TeaMaker();
teaMaker.makeBeverage();
console.log('Making coffee: ');
const coffeeMaker = new BeverageMakerTemplate_1.CoffeeMaker();
coffeeMaker.makeBeverage();
