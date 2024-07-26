"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutOfStockState = exports.PaymentPendingState = exports.ProductSelectedState = exports.ReadyState = void 0;
class ReadyState {
    handleRequest() {
        console.log('ReadyState: handleRequest');
    }
}
exports.ReadyState = ReadyState;
class ProductSelectedState {
    handleRequest() {
        console.log('ProductSelectedState: handleRequest');
    }
}
exports.ProductSelectedState = ProductSelectedState;
class PaymentPendingState {
    handleRequest() {
        console.log('PaymentPendingState: handleRequest');
    }
}
exports.PaymentPendingState = PaymentPendingState;
class OutOfStockState {
    handleRequest() {
        console.log('OutOfStockState: handleRequest');
    }
}
exports.OutOfStockState = OutOfStockState;
