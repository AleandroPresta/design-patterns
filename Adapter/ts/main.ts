import { LegacyPrinter } from "./LegacyPrinter";
import { PrinterAdapter } from "./PrinterAdapter";
import { Printer } from "./Printer";

const printer: Printer = new PrinterAdapter(new LegacyPrinter());

printer.print('Hello, World!');