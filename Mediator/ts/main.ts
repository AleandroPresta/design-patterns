import { Airplane, CommercialAirplane } from './Airplane';
import { AirportControlTower, AirTrafficControlTower } from './Mediator';

const controlTower: AirTrafficControlTower = new AirportControlTower();

const airplane1: Airplane = new CommercialAirplane(controlTower);
const airplane2: Airplane = new CommercialAirplane(controlTower);

airplane1.requestTakeOff();
airplane2.requestTakeOff();