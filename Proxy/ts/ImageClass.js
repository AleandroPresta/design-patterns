"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyImage = exports.RealImage = void 0;
class RealImage {
    constructor(fileName) {
        this.fileName = fileName;
        this.loadFromDisk();
    }
    display() {
        console.log(`Displaying ${this.fileName}`);
    }
    loadFromDisk() {
        console.log(`Loading ${this.fileName}`);
    }
}
exports.RealImage = RealImage;
class ProxyImage {
    constructor(fileName) {
        this.fileName = fileName;
    }
    display() {
        if (this.realImage == null) {
            this.realImage = new RealImage(this.fileName);
        }
        this.realImage.display();
    }
}
exports.ProxyImage = ProxyImage;
