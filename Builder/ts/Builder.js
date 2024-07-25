"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamingComputerBuilder = exports.OfficeComputerBuilder = void 0;
const Computer_1 = require("./Computer");
class OfficeComputerBuilder {
    constructor() {
        this.computer = new Computer_1.Computer();
    }
    build_cpu() {
        this.computer.cpu = "Intel Core i5-9400F";
    }
    build_ram() {
        this.computer.ram = "Corsair Vengeance LPX 8GB";
    }
    build_storage() {
        this.computer.storage = "Seagate Barracuda 1TB";
    }
    get_result() {
        return this.computer;
    }
}
exports.OfficeComputerBuilder = OfficeComputerBuilder;
class GamingComputerBuilder {
    constructor() {
        this.computer = new Computer_1.Computer();
    }
    build_cpu() {
        this.computer.cpu = "Intel Core i7-9700K";
    }
    build_ram() {
        this.computer.ram = "Corsair Vengeance LPX 16GB";
    }
    build_storage() {
        this.computer.storage = "Samsung 970 EVO 500GB";
    }
    get_result() {
        return this.computer;
    }
}
exports.GamingComputerBuilder = GamingComputerBuilder;
