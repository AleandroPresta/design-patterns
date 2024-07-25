import { AirTrafficControlTower } from './Mediator';

export interface Airplane {
    requestTakeOff(): void;
    requestLanding(): void;
    notifyAirTrafficControl(message: string): void;
}

export class CommercialAirplane implements Airplane {
    private mediator: AirTrafficControlTower;

    constructor(mediator: AirTrafficControlTower) {
        this.mediator = mediator;
    }

    requestTakeOff(): void {
        this.mediator.requestTakeOff(this);
    }

    requestLanding(): void {
        this.mediator.requestLanding(this);
    }

    notifyAirTrafficControl(message: string): void {
        console.log(`Commercial Airplane: ${message}`);
    }
}