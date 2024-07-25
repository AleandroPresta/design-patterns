export interface Device {
    turnOn(): void;
    turnOff(): void;
}

export class TV implements Device {
    turnOn(): void {
        console.log('TV is on');
    }

    turnOff(): void {
        console.log('TV is off');
    }

    changeChannel() {
        console.log('Channel changed');
    }
}

export class Stereo implements Device {
    turnOn(): void {
        console.log('Stereo is on');
    }

    turnOff(): void {
        console.log('Stereo is off');
    }

    adjustVolume() {
        console.log('Volume adjusted');
    }
}