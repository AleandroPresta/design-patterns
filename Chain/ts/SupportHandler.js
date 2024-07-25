"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Level3SupportHandler = exports.Level2SupportHandler = exports.Level1SupportHandler = void 0;
const Request_1 = require("./Request");
class Level1SupportHandler {
    setNextHandler(nextHandler) {
        this.nextHandler = nextHandler;
    }
    handleRequest(request) {
        if (request.getPriority() === Request_1.Priority.BASIC) {
            console.log("Level 1 Support is handling the request.");
        }
        else if (this.nextHandler !== undefined) {
            this.nextHandler.handleRequest(request);
        }
    }
}
exports.Level1SupportHandler = Level1SupportHandler;
class Level2SupportHandler {
    setNextHandler(nextHandler) {
        this.nextHandler = nextHandler;
    }
    handleRequest(request) {
        if (request.getPriority() === Request_1.Priority.INTERMEDIATE) {
            console.log("Level 2 Support is handling the request.");
        }
        else if (this.nextHandler !== undefined) {
            this.nextHandler.handleRequest(request);
        }
    }
}
exports.Level2SupportHandler = Level2SupportHandler;
class Level3SupportHandler {
    setNextHandler(nextHandler) {
        // Do nothing
    }
    handleRequest(request) {
        if (request.getPriority() === Request_1.Priority.CRITICAL) {
            console.log("Level 3 Support is handling the request.");
        }
        else {
            console.log("Request cannot be handler.");
        }
    }
}
exports.Level3SupportHandler = Level3SupportHandler;
