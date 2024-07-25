export abstract class Vehicle {
    abstract printVehicle(): void;
}

export class FourWheeler extends Vehicle {
    printVehicle(): void {
        console.log('Four Wheeler Vehicle');
    }
}

export class TwoWheeler extends Vehicle {
    printVehicle(): void {
        console.log('Two Wheeler Vehicle');
    }
}