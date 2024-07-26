"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapeClient = void 0;
class ShapeClient {
    constructor(shapePrototype) {
        this.shapePrototype = shapePrototype;
    }
    createShape() {
        return this.shapePrototype.clone();
    }
}
exports.ShapeClient = ShapeClient;
