from PrinterAdapter import PrinterAdapter
from LegacyPrinter import LegacyPrinter
from Printer import Printer

def main() -> None:
    printer: Printer = PrinterAdapter(LegacyPrinter())
    
    printer.print("Hello, World!")
    
if __name__ == "__main__":
    main()