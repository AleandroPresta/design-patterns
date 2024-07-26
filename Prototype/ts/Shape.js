"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
class Circle {
    constructor(color) {
        this.color = color;
    }
    clone() {
        return new Circle(this.color);
    }
    draw() {
        console.log(`Drawing Circle with color ${this.color}`);
    }
}
exports.Circle = Circle;
