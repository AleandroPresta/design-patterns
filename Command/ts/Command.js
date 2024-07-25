"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdjustVolumeCommand = exports.ChangeChannelCommand = exports.TurnOffCommand = exports.TurnOnCommand = void 0;
class TurnOnCommand {
    constructor(device) {
        this.device = device;
    }
    execute() {
        this.device.turnOn();
    }
}
exports.TurnOnCommand = TurnOnCommand;
class TurnOffCommand {
    constructor(device) {
        this.device = device;
    }
    execute() {
        this.device.turnOff();
    }
}
exports.TurnOffCommand = TurnOffCommand;
class ChangeChannelCommand {
    constructor(tv) {
        this.tv = tv;
    }
    execute() {
        this.tv.changeChannel();
    }
}
exports.ChangeChannelCommand = ChangeChannelCommand;
class AdjustVolumeCommand {
    constructor(stereo) {
        this.stereo = stereo;
    }
    execute() {
        this.stereo.adjustVolume();
    }
}
exports.AdjustVolumeCommand = AdjustVolumeCommand;
