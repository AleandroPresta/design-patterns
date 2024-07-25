export class Computer {
    cpu: string;
    ram: string;
    storage: string;

    constructor() {
        this.cpu = '';
        this.ram = '';
        this.storage = '';
    }

    set_cpu(cpu: string): void {
        this.cpu = cpu;
    }

    set_ram(ram: string): void {
        this.ram = ram;
    }

    set_storage(storage: string): void {
        this.storage = storage;
    }

    display_info(): void {
        console.log('Computer configuration:');
        console.log(`CPU: ${this.cpu}`);
        console.log(`RAM: ${this.ram}`);
        console.log(`Storage: ${this.storage}`);
    }
}