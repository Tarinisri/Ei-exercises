import * as readline from 'readline';
import Device from './devices/Device';
import { ConcreteObservable } from './patterns/Observer';
import { LightFactory, ThermostatFactory, DoorFactory, DeviceFactory } from './patterns/FactoryMethod';
import DeviceProxy from './patterns/Proxy';
import Scheduler from './Scheduler';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let devices: Map<number, Device> = new Map();
const scheduler = new Scheduler();
const observable = new ConcreteObservable();

const lightFactory: DeviceFactory = new LightFactory();
const thermostatFactory: DeviceFactory = new ThermostatFactory();
const doorFactory: DeviceFactory = new DoorFactory();

const deviceFactories: { [key: string]: DeviceFactory } = {
    'light': lightFactory,
    'thermostat': thermostatFactory,
    'door': doorFactory
};

console.log("Welcome to Smart Home System");

function mainMenu() {
    console.log("\nSelect an option:");
    console.log("1. Add Device");
    console.log("2. Turn Device On/Off");
    console.log("3. Set Schedule");
    console.log("4. View Status");
    console.log("5. Exit");

    rl.question("Enter your choice: ", (choice: string) => {
        switch(choice) {
            case '1':
                addDevice();
                break;
            case '2':
                turnDeviceOnOff();
                break;
            case '3':
                setSchedule();
                break;
            case '4':
                viewStatus();
                break;
            case '5':
                rl.close();
                break;
            default:
                console.log("Invalid choice");
                mainMenu();
        }
    });
}

function addDevice() {
    rl.question("Enter device type (light, thermostat, door): ", (type: string) => {
        const factory = deviceFactories[type];
        if (!factory) {
            console.log("Invalid device type");
            mainMenu();
            return;
        }
        const id = devices.size + 1;
        const device = factory.createDevice(id);
        const proxyDevice = new DeviceProxy(device);
        devices.set(id, proxyDevice);
        observable.addObserver(proxyDevice);
        console.log(`${type.charAt(0).toUpperCase() + type.slice(1)} with ID ${id} added.`);
        mainMenu();
    });
}

function turnDeviceOnOff() {
    rl.question("Enter device ID and action (e.g., 1 turnOn): ", (input: string) => {
        const [idStr, action] = input.split(' ');
        const id = parseInt(idStr);
        const device = devices.get(id);
        if (!device) {
            console.log("Invalid device ID");
            mainMenu();
            return;
        }
        device.operate(action);
        observable.setState({ id, action });
        mainMenu();
    });
}

function setSchedule() {
    rl.question("Enter device ID, time (HH:MM), and command (e.g., 2 06:00 turnOn): ", (input: string) => {
        const [idStr, time, command] = input.split(' ');
        const id = parseInt(idStr);
        const device = devices.get(id);
        if (!device) {
            console.log("Invalid device ID");
            mainMenu();
            return;
        }
        scheduler.addSchedule(id, time, command);
        console.log(`Schedule set for device ${id} at ${time} to ${command}.`);
        mainMenu();
    });
}

function viewStatus() {
    devices.forEach(device => {
        console.log(device.getStatus());
    });
    console.log("Scheduled Tasks:", scheduler.getSchedules());
    mainMenu();
}

mainMenu();
