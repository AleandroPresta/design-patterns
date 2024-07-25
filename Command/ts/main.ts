import { AdjustVolumeCommand, ChangeChannelCommand, TurnOffCommand, TurnOnCommand } from "./Command";
import { TV, Stereo } from "./Device";
import { RemoteController } from "./RemoteController";

const tv: TV = new TV();
const stereo: Stereo = new Stereo();

const turnOnCommand: TurnOnCommand = new TurnOnCommand(tv);
const turnOffCommand: TurnOffCommand = new TurnOffCommand(tv);
const adjustVolumeStereoCommand: AdjustVolumeCommand = new AdjustVolumeCommand(stereo);
const changeChannelTVCommand: ChangeChannelCommand = new ChangeChannelCommand(tv);

const remote: RemoteController = new RemoteController();

remote.setCommand(turnOnCommand);
remote.pressButton();

remote.setCommand(adjustVolumeStereoCommand);
remote.pressButton();

remote.setCommand(turnOffCommand);
remote.pressButton();

remote.setCommand(changeChannelTVCommand);
remote.pressButton();