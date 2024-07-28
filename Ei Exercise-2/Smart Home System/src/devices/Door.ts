// src/devices/Door.ts
import Device from './Device';

class Door implements Device {
    id: number;
    type: string;
    status: string;

    constructor(id: number) {
        this.id = id;
        this.type = 'door';
        this.status = 'locked';
    }

    operate(action: string): void {
        if (action === 'lock') {
            this.status = 'locked';
        } else if (action === 'unlock') {
            this.status = 'unlocked';
        }
    }

    getStatus(): string {
        return `Door ${this.id} is ${this.status}.`;
    }
}

export default Door;
