"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirportControlTower = void 0;
class AirportControlTower {
    requestTakeOff(airplane) {
        airplane.notifyAirTrafficControl('Requesting take-off clearance');
    }
    requestLanding(airplane) {
        airplane.notifyAirTrafficControl('Requesting landing clearance');
    }
}
exports.AirportControlTower = AirportControlTower;
