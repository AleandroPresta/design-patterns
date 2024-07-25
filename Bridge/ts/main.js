"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vehicles_1 = require("./Vehicles");
const Workshop_1 = require("./Workshop");
const vehicle1 = new Vehicles_1.Car(new Workshop_1.Produce(), new Workshop_1.Assemble());
vehicle1.manufacture();
const vehicle2 = new Vehicles_1.Bike(new Workshop_1.Produce(), new Workshop_1.Assemble());
vehicle2.manufacture();
