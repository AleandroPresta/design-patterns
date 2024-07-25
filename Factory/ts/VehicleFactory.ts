import { Vehicle, FourWheeler, TwoWheeler } from './Vehicle';

export interface VehicleFactory {
    createVehicle(): Vehicle;
}

export class FourWheelerFactory implements VehicleFactory {
    createVehicle(): Vehicle {
        return new FourWheeler();
    }
}

export class TwoWheelerFactory implements VehicleFactory {
    createVehicle(): Vehicle {
        return new TwoWheeler();
    }
}