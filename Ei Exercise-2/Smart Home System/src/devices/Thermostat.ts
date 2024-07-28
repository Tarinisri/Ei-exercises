// src/devices/Thermostat.ts
import Device from './Device';

class Thermostat implements Device {
    id: number;
    type: string;
    status: string;
    temperature: number;

    constructor(id: number, temperature: number = 70) {
        this.id = id;
        this.type = 'thermostat';
        this.status = `set to ${temperature} degrees`;
        this.temperature = temperature;
    }

    operate(action: string): void {
        // No specific operation for on/off, assume status change
    }

    setTemperature(temp: number): void {
        this.temperature = temp;
        this.status = `set to ${temp} degrees`;
    }

    getStatus(): string {
        return `Thermostat ${this.id} is ${this.status}.`;
    }
}

export default Thermostat;
