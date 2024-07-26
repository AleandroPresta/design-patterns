"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const ShapeClient_1 = require("./ShapeClient");
const circle = new Shape_1.Circle("Red");
const shapeClient = new ShapeClient_1.ShapeClient(circle);
const clonedCircle = shapeClient.createShape();
circle.draw();
