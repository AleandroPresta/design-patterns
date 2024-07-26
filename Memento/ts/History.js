"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryClass = void 0;
class HistoryClass {
    constructor() {
        this.mementos = [];
    }
    addMemento(memento) {
        this.mementos.push(memento);
    }
    getMemento(index) {
        return this.mementos[index];
    }
}
exports.HistoryClass = HistoryClass;
