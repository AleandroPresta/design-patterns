"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stereo = exports.TV = void 0;
class TV {
    turnOn() {
        console.log('TV is on');
    }
    turnOff() {
        console.log('TV is off');
    }
    changeChannel() {
        console.log('Channel changed');
    }
}
exports.TV = TV;
class Stereo {
    turnOn() {
        console.log('Stereo is on');
    }
    turnOff() {
        console.log('Stereo is off');
    }
    adjustVolume() {
        console.log('Volume adjusted');
    }
}
exports.Stereo = Stereo;
