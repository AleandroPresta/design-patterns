"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteController = void 0;
class RemoteController {
    setCommand(command) {
        this.command = command;
    }
    pressButton() {
        this.command.execute();
    }
}
exports.RemoteController = RemoteController;
