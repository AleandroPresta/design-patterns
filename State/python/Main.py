from Context import VendingMachineContext
from States import ReadyState, ProductSelectedState, PaymentPendingState, OutOfStockState

def main() -> None:
    vending_machine: VendingMachineContext = VendingMachineContext()
    
    vending_machine.set_state(ReadyState())
    
    vending_machine.request()
    
    vending_machine.set_state(ProductSelectedState())
    
    vending_machine.request()
    
    vending_machine.set_state(PaymentPendingState())
    
    vending_machine.request()
    
    vending_machine.set_state(OutOfStockState())
    
    vending_machine.request()
    
if __name__ == "__main__":
    main()