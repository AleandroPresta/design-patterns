from Printer import Printer
from LegacyPrinter import LegacyPrinter

class PrinterAdapter(Printer):
    legacy_printer: LegacyPrinter
    
    def __init__(self, legacy_printer: LegacyPrinter):
        self.legacy_printer = legacy_printer
        
    def print(self, message: str):
        self.legacy_printer.printDocument(message)