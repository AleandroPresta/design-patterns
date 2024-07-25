"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconFactory = void 0;
const Icon_1 = require("./Icon");
const Image_1 = require("./Image");
class IconFactory {
    constructor() {
        this.iconCache = new Map();
    }
    getIcon(key) {
        if (this.iconCache.has(key)) {
            return this.iconCache.get(key);
        }
        else {
            let icon = undefined;
            if (key === 'file') {
                icon = new Icon_1.FileIcon('document', this.loadImage('document.png'));
            }
            else if (key === 'folder') {
                icon = new Icon_1.FolderIcon('blue', this.loadImage('folder.png'));
            }
            this.iconCache.set(key, icon);
            return icon;
        }
    }
    loadImage(filename) {
        return new Image_1.ImageClass(filename);
    }
}
exports.IconFactory = IconFactory;
