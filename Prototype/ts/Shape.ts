export interface Shape {
    clone(): Shape;
    draw(): void;
}

export class Circle implements Shape {
    private color: string;

    constructor(color: string) {
        this.color = color;
    }

    clone(): Shape {
        return new Circle(this.color);
    }

    draw(): void {
        console.log(`Drawing Circle with color ${this.color}`);
    }
}