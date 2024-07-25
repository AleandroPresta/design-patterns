"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike = exports.Car = exports.Vehicle = void 0;
class Vehicle {
    constructor(workshop1, workshop2) {
        this.workshop1 = workshop1;
        this.workshop2 = workshop2;
    }
}
exports.Vehicle = Vehicle;
class Car extends Vehicle {
    constructor(workshop1, workshop2) {
        super(workshop1, workshop2);
    }
    manufacture() {
        console.log('Car');
        this.workshop1.work();
        this.workshop2.work();
    }
}
exports.Car = Car;
class Bike extends Vehicle {
    constructor(workshop1, workshop2) {
        super(workshop1, workshop2);
    }
    manufacture() {
        console.log('Bike');
        this.workshop1.work();
        this.workshop2.work();
    }
}
exports.Bike = Bike;
