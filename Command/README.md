# Command Design Pattern

The Command Design Pattern is a behavioral design pattern that turns a request into a stand-alone object, allowing parameterization of clients with different requests, queuing of requests, and support for undoable operations(action or a series of actions that can be reversed or undone in a system).

## Table of Contents

-   [Components of the Command Design Pattern](#components-of-the-command-design-pattern)
-   [Implementation](#implementation)

## Components of the Command Design Pattern

1. **Command Interface**
   The Command Interface is like a rulebook that all command classes follow. It declares a common method, `execute()`, ensuring that every concrete command knows how to perform its specific action. It sets the standard for all commands, making it easier for the remote control to manage and execute diverse operations without needing to know the details of each command.

2. **Concrete Command Classes**
   Concrete Command Classes are the specific commands, like turning on a TV or adjusting the stereo volume. Each class encapsulates the details of a particular action. These classes act as executable instructions that the remote control can trigger without worrying about the nitty-gritty details of how each command accomplishes its task.

3. **Invoker (Remote Control)**
   The Invoker, often a remote control, is the one responsible for initiating command execution. It holds a reference to a command but doesn’t delve into the specifics of how each command works. It’s like a button that, when pressed, makes things happen. The remote control’s role is to coordinate and execute commands without getting involved in the complexities of individual actions.

4. **Receiver (Devices)**
   The Receiver is the device that knows how to perform the actual operation associated with a command. It could be a TV, stereo, or any other device. Receivers understand the specific tasks mentioned in commands. If a command says, “turn on,” the Receiver (device) knows precisely how to execute that action. The Receiver-Command relationship separates responsibilities, making it easy to add new devices or commands without messing with existing functionality.

## Implementation
