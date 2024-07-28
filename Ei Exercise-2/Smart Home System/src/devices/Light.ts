// src/devices/Light.ts
import Device from './Device';

class Light implements Device {
    id: number;
    type: string;
    status: string;

    constructor(id: number) {
        this.id = id;
        this.type = 'light';
        this.status = 'off';
    }

    operate(action: string): void {
        if (action === 'turnOn') {
            this.status = 'on';
        } else if (action === 'turnOff') {
            this.status = 'off';
        }
    }

    getStatus(): string {
        return `Light ${this.id} is ${this.status}.`;
    }
}

export default Light;
