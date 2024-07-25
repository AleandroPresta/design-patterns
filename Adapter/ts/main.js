"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LegacyPrinter_1 = require("./LegacyPrinter");
const PrinterAdapter_1 = require("./PrinterAdapter");
const printer = new PrinterAdapter_1.PrinterAdapter(new LegacyPrinter_1.LegacyPrinter());
printer.print('Hello, World!');
