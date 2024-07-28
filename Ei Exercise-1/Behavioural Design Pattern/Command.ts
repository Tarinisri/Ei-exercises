// Command interface
interface Command {
    execute(): void;
  }
  
  // Light class (Receiver)
  class Light {
    turnOn(): void {
      console.log("Light is ON");
    }
  
    turnOff(): void {
      console.log("Light is OFF");
    }
  }
  
  // Fan class (Receiver)
  class Fan {
    turnOn(): void {
      console.log("Fan is ON");
    }
  
    turnOff(): void {
      console.log("Fan is OFF");
    }
  }
  
  // LightOnCommand class
  class LightOnCommand implements Command {
    constructor(private light: Light) {}
  
    execute(): void {
      this.light.turnOn();
    }
  }
  
  // LightOffCommand class
  class LightOffCommand implements Command {
    constructor(private light: Light) {}
  
    execute(): void {
      this.light.turnOff();
    }
  }
  
  // FanOnCommand class
  class FanOnCommand implements Command {
    constructor(private fan: Fan) {}
  
    execute(): void {
      this.fan.turnOn();
    }
  }
  
  // FanOffCommand class
  class FanOffCommand implements Command {
    constructor(private fan: Fan) {}
  
    execute(): void {
      this.fan.turnOff();
    }
  }
  
  // RemoteControl class (Invoker)
  class RemoteControl {
    private commands: Command[] = [];
  
    setCommand(command: Command): void {
      this.commands.push(command);
    }
  
    pressButton(): void {
      const command = this.commands.pop();
      if (command) {
        command.execute();
      }
    }
  }
  
  // Usage
  const light = new Light();
  const fan = new Fan();
  const lightOnCommand = new LightOnCommand(light);
  const lightOffCommand = new LightOffCommand(light);
  const fanOnCommand = new FanOnCommand(fan);
  const fanOffCommand = new FanOffCommand(fan);
  
  const remoteControl = new RemoteControl();
  remoteControl.setCommand(lightOnCommand);
  remoteControl.pressButton();
  remoteControl.setCommand(fanOnCommand);
  remoteControl.pressButton();
  remoteControl.setCommand(lightOffCommand);
  remoteControl.pressButton();
  remoteControl.setCommand(fanOffCommand);
  remoteControl.pressButton();
  