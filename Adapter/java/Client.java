package Adapter.java;

public class Client {

    public static void main(String[] args) {
        Printer printer = new PrinterAdapter(new LegacyPrinter());
        printer.print("Hello, World!");
    }
    
}
