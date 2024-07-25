import { Vehicle } from "./Vehicle";
import { TwoWheelerFactory, VehicleFactory, FourWheelerFactory } from "./VehicleFactory";

const twoWheelerFactory: VehicleFactory = new TwoWheelerFactory();
const twoWHeeler: Vehicle = twoWheelerFactory.createVehicle();
twoWHeeler.printVehicle(); // Output: Two Wheeler Vehicle

const fourWheelerFactory: VehicleFactory = new FourWheelerFactory();
const fourWheeler: Vehicle = fourWheelerFactory.createVehicle();
fourWheeler.printVehicle(); // Output: Four Wheeler Vehicle