"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortingContext = void 0;
class SortingContext {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    sort(data) {
        this.strategy.sort(data);
    }
}
exports.SortingContext = SortingContext;
