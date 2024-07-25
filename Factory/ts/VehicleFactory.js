"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoWheelerFactory = exports.FourWheelerFactory = void 0;
const Vehicle_1 = require("./Vehicle");
class FourWheelerFactory {
    createVehicle() {
        return new Vehicle_1.FourWheeler();
    }
}
exports.FourWheelerFactory = FourWheelerFactory;
class TwoWheelerFactory {
    createVehicle() {
        return new Vehicle_1.TwoWheeler();
    }
}
exports.TwoWheelerFactory = TwoWheelerFactory;
