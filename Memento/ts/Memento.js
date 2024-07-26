"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentMemento = void 0;
class DocumentMemento {
    constructor(content) {
        this.content = content;
    }
    getSavedContent() {
        return this.content;
    }
}
exports.DocumentMemento = DocumentMemento;
