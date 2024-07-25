"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommercialAirplane = void 0;
class CommercialAirplane {
    constructor(mediator) {
        this.mediator = mediator;
    }
    requestTakeOff() {
        this.mediator.requestTakeOff(this);
    }
    requestLanding() {
        this.mediator.requestLanding(this);
    }
    notifyAirTrafficControl(message) {
        console.log(`Commercial Airplane: ${message}`);
    }
}
exports.CommercialAirplane = CommercialAirplane;
