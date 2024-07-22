// Concrete command for changing the channel of a TV
public class ChangeChannelCommand implements Command {
private TV tv;

    public ChangeChannelCommand(TV tv) {
        this.tv = tv;
    }

    @Override
    public void execute() {
        tv.changeChannel();
    }

}