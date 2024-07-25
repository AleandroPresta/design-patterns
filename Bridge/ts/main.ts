import { Vehicle, Car, Bike } from "./Vehicles";
import { Produce, Assemble } from "./Workshop";

const vehicle1: Vehicle = new Car(new Produce(), new Assemble());
vehicle1.manufacture();

const vehicle2: Vehicle = new Bike(new Produce(), new Assemble());
vehicle2.manufacture();
