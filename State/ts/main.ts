import { ReadyState, ProductSelectedState, PaymentPendingState, OutOfStockState } from "./State";
import { VendingMachineContext } from "./VendingMachine";

const vendingMachine: VendingMachineContext = new VendingMachineContext();

vendingMachine.setState(new ReadyState());

vendingMachine.request();

vendingMachine.setState(new ProductSelectedState());

vendingMachine.request();

vendingMachine.setState(new PaymentPendingState());

vendingMachine.request();

vendingMachine.setState(new OutOfStockState());

vendingMachine.request();