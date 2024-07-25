import { Device, TV, Stereo } from "./Device";

export interface Command {
    execute(): void;
}

export class TurnOnCommand implements Command {
    private device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    execute(): void {
        this.device.turnOn();
    }
}

export class TurnOffCommand implements Command {
    private device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    execute(): void {
        this.device.turnOff();
    }
}

export class ChangeChannelCommand implements Command {
    private tv: TV;

    constructor(tv: TV) {
        this.tv = tv;
    }

    execute(): void {
        this.tv.changeChannel();
    }
}

export class AdjustVolumeCommand implements Command {
    private stereo: Stereo;

    constructor(stereo: Stereo) {
        this.stereo = stereo;
    }

    execute(): void {
        this.stereo.adjustVolume();
    }
}