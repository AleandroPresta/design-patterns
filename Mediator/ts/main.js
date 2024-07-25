"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Airplane_1 = require("./Airplane");
const Mediator_1 = require("./Mediator");
const controlTower = new Mediator_1.AirportControlTower();
const airplane1 = new Airplane_1.CommercialAirplane(controlTower);
const airplane2 = new Airplane_1.CommercialAirplane(controlTower);
airplane1.requestTakeOff();
airplane2.requestTakeOff();
