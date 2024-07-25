"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderIcon = exports.FileIcon = void 0;
class FileIcon {
    constructor(type, image) {
        this.type = type;
        this.image = image;
    }
    draw(x, y) {
        console.log(`Drawing ${this.type} icon at (${x}, ${y})`);
    }
}
exports.FileIcon = FileIcon;
class FolderIcon {
    constructor(color, image) {
        this.color = color;
        this.image = image;
    }
    draw(x, y) {
        console.log(`Drawing ${this.color} icon at (${x}, ${y})`);
    }
}
exports.FolderIcon = FolderIcon;
