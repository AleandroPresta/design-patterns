from States import VendingMachineState

class VendingMachineContext:
    state: VendingMachineState
    
    def set_state(self, state: VendingMachineState) -> None:
        self.state = state
        
    def request(self) -> None:
        self.state.handle_request()