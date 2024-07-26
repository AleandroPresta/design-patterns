import { VendingMachineState } from "./State";

export class VendingMachineContext {

    private state: VendingMachineState;

    setState(state: VendingMachineState): void {
        this.state = state;
    }

    request(): void {
        this.state.handleRequest();
    }

}