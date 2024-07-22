from Commands import Command

class RemoteController:
    command: Command

    def set_command(self, command: Command) -> None:
        self.command = command
        
    def press_button(self) -> None:
        self.command.execute()