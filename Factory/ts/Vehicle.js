"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoWheeler = exports.FourWheeler = exports.Vehicle = void 0;
class Vehicle {
}
exports.Vehicle = Vehicle;
class FourWheeler extends Vehicle {
    printVehicle() {
        console.log('Four Wheeler Vehicle');
    }
}
exports.FourWheeler = FourWheeler;
class TwoWheeler extends Vehicle {
    printVehicle() {
        console.log('Two Wheeler Vehicle');
    }
}
exports.TwoWheeler = TwoWheeler;
