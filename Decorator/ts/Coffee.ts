export interface Coffee {
    getDescription(): string;
    getCost(): number;
}

export class PlainCoffe implements Coffee {
    getDescription(): string {
        return 'Plain coffee';
    }

    getCost(): number {
        return 2.0;
    }
}