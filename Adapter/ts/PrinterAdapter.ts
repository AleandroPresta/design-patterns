import { Printer } from './Printer';
import { LegacyPrinter } from './LegacyPrinter';

export class PrinterAdapter implements Printer {
    legacy_printer: LegacyPrinter

    constructor(legacy_printer: LegacyPrinter) {
        this.legacy_printer = legacy_printer
    }

    print(message: string) {
        this.legacy_printer.printDocument(message)
    }
}
