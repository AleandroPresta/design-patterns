"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VehicleFactory_1 = require("./VehicleFactory");
const twoWheelerFactory = new VehicleFactory_1.TwoWheelerFactory();
const twoWHeeler = twoWheelerFactory.createVehicle();
twoWHeeler.printVehicle(); // Output: Two Wheeler Vehicle
const fourWheelerFactory = new VehicleFactory_1.FourWheelerFactory();
const fourWheeler = fourWheelerFactory.createVehicle();
fourWheeler.printVehicle(); // Output: Four Wheeler Vehicle
