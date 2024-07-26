import { Shape, Circle } from "./Shape";
import { ShapeClient } from "./ShapeClient";

const circle: Shape = new Circle("Red");

const shapeClient: ShapeClient = new ShapeClient(circle);

const clonedCircle: Shape = shapeClient.createShape();

circle.draw();