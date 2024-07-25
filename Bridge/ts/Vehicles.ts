import { Workshop } from "./Workshop"

export abstract class Vehicle {

    workshop1: Workshop;
    workshop2: Workshop;

    constructor(workshop1: Workshop, workshop2: Workshop) {
        this.workshop1 = workshop1;
        this.workshop2 = workshop2;
    }

    abstract manufacture(): void

}

export class Car extends Vehicle {

    constructor(workshop1: Workshop, workshop2: Workshop) {
        super(workshop1, workshop2);
    }

    manufacture(): void {
        console.log('Car');
        this.workshop1.work();
        this.workshop2.work();
    }

}

export class Bike extends Vehicle {

    constructor(workshop1: Workshop, workshop2: Workshop) {
        super(workshop1, workshop2);
    }

    manufacture(): void {
        console.log('Bike');
        this.workshop1.work();
        this.workshop2.work();
    }

}