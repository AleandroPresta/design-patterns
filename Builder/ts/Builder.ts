import { Computer } from "./Computer";

export interface Builder {

    build_cpu(): void;
    build_ram(): void;
    build_storage(): void;
    get_result(): Computer;

}

export class OfficeComputerBuilder implements Builder {

    computer: Computer = new Computer();

    build_cpu(): void {
        this.computer.cpu = "Intel Core i5-9400F";
    }

    build_ram(): void {
        this.computer.ram = "Corsair Vengeance LPX 8GB";
    }

    build_storage(): void {
        this.computer.storage = "Seagate Barracuda 1TB";
    }

    get_result(): Computer {
        return this.computer;
    }

}

export class GamingComputerBuilder implements Builder {

    computer: Computer = new Computer();

    build_cpu(): void {
        this.computer.cpu = "Intel Core i7-9700K";
    }

    build_ram(): void {
        this.computer.ram = "Corsair Vengeance LPX 16GB";
    }

    build_storage(): void {
        this.computer.storage = "Samsung 970 EVO 500GB";
    }

    get_result(): Computer {
        return this.computer;
    }

}