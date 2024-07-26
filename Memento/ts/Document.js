"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentClass = void 0;
const Memento_1 = require("./Memento");
class DocumentClass {
    constructor(content) {
        this.content = content;
    }
    write(text) {
        this.content += text;
    }
    getContent() {
        return this.content;
    }
    createMemento() {
        return new Memento_1.DocumentMemento(this.content);
    }
    restoreFromMemento(memento) {
        this.content = memento.getSavedContent();
    }
}
exports.DocumentClass = DocumentClass;
