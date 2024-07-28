// src/devices/Device.ts
interface Device {
    id: number;
    type: string;
    status: string;
    operate(action: string): void;
    getStatus(): string;
}

export default Device;
