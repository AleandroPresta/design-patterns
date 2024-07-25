import { Airplane } from "./Airplane";

export interface AirTrafficControlTower {
    requestTakeOff(airplane: Airplane): void;
    requestLanding(airplane: Airplane): void;
}

export class AirportControlTower implements AirTrafficControlTower {
    requestTakeOff(airplane: Airplane): void {
        airplane.notifyAirTrafficControl('Requesting take-off clearance');
    }

    requestLanding(airplane: Airplane): void {
        airplane.notifyAirTrafficControl('Requesting landing clearance');
    }
}