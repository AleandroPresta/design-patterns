"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrinterAdapter = void 0;
class PrinterAdapter {
    constructor(legacy_printer) {
        this.legacy_printer = legacy_printer;
    }
    print(message) {
        this.legacy_printer.printDocument(message);
    }
}
exports.PrinterAdapter = PrinterAdapter;
