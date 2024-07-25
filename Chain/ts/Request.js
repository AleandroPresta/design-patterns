"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = exports.Priority = void 0;
var Priority;
(function (Priority) {
    Priority[Priority["BASIC"] = 0] = "BASIC";
    Priority[Priority["INTERMEDIATE"] = 1] = "INTERMEDIATE";
    Priority[Priority["CRITICAL"] = 2] = "CRITICAL";
})(Priority || (exports.Priority = Priority = {}));
class Request {
    constructor(priority) {
        this.priority = priority;
    }
    getPriority() {
        return this.priority;
    }
}
exports.Request = Request;
