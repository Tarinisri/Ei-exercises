import Device from '../devices/Device';
import { Observer } from './Observer';

class DeviceProxy implements Device, Observer {
    private realDevice: Device;

    constructor(realDevice: Device) {
        this.realDevice = realDevice;
    }

    get id(): number {
        return this.realDevice.id;
    }

    get type(): string {
        return this.realDevice.type;
    }

    get status(): string {
        return this.realDevice.status;
    }

    operate(action: string): void {
        console.log(`Proxy: Controlling device ${this.realDevice.id}`);
        this.realDevice.operate(action);
    }

    getStatus(): string {
        return this.realDevice.getStatus();
    }

    update(state: any): void {
        console.log(`Proxy: Device ${this.realDevice.id} received update with state: ${state}`);
    }
}

export default DeviceProxy;
