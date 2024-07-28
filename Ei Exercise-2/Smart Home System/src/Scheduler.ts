// src/Scheduler.ts
class Scheduler {
    private schedules: { device: number, time: string, command: string }[] = [];

    addSchedule(device: number, time: string, command: string): void {
        this.schedules.push({ device, time, command });
    }

    getSchedules(): string {
        return JSON.stringify(this.schedules);
    }
}

export default Scheduler;
