export interface VendingMachineState {

    handleRequest(): void;

}

export class ReadyState implements VendingMachineState {

    handleRequest(): void {
        console.log('ReadyState: handleRequest');
    }

}

export class ProductSelectedState implements VendingMachineState {

    handleRequest(): void {
        console.log('ProductSelectedState: handleRequest');
    }

}

export class PaymentPendingState implements VendingMachineState {

    handleRequest(): void {
        console.log('PaymentPendingState: handleRequest');
    }

}

export class OutOfStockState implements VendingMachineState {

    handleRequest(): void {
        console.log('OutOfStockState: handleRequest');
    }

}