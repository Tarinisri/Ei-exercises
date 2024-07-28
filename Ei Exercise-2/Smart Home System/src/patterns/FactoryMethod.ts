// src/patterns/FactoryMethod.ts
import Device from '../devices/Device';
import Light from '../devices/Light';
import Thermostat from '../devices/Thermostat';
import Door from '../devices/Door';

abstract class DeviceFactory {
    abstract createDevice(id: number): Device;
}

class LightFactory extends DeviceFactory {
    createDevice(id: number): Device {
        return new Light(id);
    }
}

class ThermostatFactory extends DeviceFactory {
    createDevice(id: number): Device {
        return new Thermostat(id);
    }
}

class DoorFactory extends DeviceFactory {
    createDevice(id: number): Device {
        return new Door(id);
    }
}

export { DeviceFactory, LightFactory, ThermostatFactory, DoorFactory };
