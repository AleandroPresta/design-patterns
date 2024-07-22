from abc import ABC, abstractmethod

class VendingMachineState(ABC):
    @abstractmethod
    def handle_request() -> None:
        pass
    
class ReadyState(VendingMachineState):
    def handle_request(self) -> None:
        print("Ready state: Please select a product.")
        
class ProductSelectedState(VendingMachineState):
    def handle_request(self) -> None:
        print("Product selected state: Please insert coins.")
        
class PaymentPendingState(VendingMachineState):
    def handle_request(self) -> None:
        print("Payment pending state: Please wait for the payment to be processed.")
        
        
class OutOfStockState(VendingMachineState):
    def handle_request(self) -> None:
        print("Out of stock state: Product is out of stock.")