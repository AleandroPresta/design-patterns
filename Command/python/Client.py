from Commands import Command, TurnOnCommand, TurnOffCommand, AdjustVolumeCommand, ChangeChannelCommand
from Devices import Stereo, TV
from RemoteController import RemoteController

def main() -> None:
    tv: TV = TV()
    stereo: Stereo = Stereo()
    
    turn_on_command: Command = TurnOnCommand(tv)
    turn_off_command: Command = TurnOffCommand(tv)
    adjust_volume_command: Command = AdjustVolumeCommand(stereo)
    change_channel_command: Command = ChangeChannelCommand(tv)
    
    remote: RemoteController = RemoteController()

    remote.set_command(turn_on_command)
    remote.press_button()
    
    remote.set_command(turn_off_command)
    remote.press_button()
    
    remote.set_command(adjust_volume_command)
    remote.press_button()
    
    remote.set_command(change_channel_command)
    remote.press_button()

if __name__ == "__main__":
    main()