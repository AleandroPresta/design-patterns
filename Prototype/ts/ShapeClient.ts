import { Shape } from "./Shape";

export class ShapeClient {

    private shapePrototype: Shape;

    constructor(shapePrototype: Shape) {
        this.shapePrototype = shapePrototype;
    }

    createShape(): Shape {
        return this.shapePrototype.clone();
    }

}