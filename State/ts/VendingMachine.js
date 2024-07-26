"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachineContext = void 0;
class VendingMachineContext {
    setState(state) {
        this.state = state;
    }
    request() {
        this.state.handleRequest();
    }
}
exports.VendingMachineContext = VendingMachineContext;
