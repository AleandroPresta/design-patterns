"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computer = void 0;
class Computer {
    constructor() {
        this.cpu = '';
        this.ram = '';
        this.storage = '';
    }
    set_cpu(cpu) {
        this.cpu = cpu;
    }
    set_ram(ram) {
        this.ram = ram;
    }
    set_storage(storage) {
        this.storage = storage;
    }
    display_info() {
        console.log('Computer configuration:');
        console.log(`CPU: ${this.cpu}`);
        console.log(`RAM: ${this.ram}`);
        console.log(`Storage: ${this.storage}`);
    }
}
exports.Computer = Computer;
