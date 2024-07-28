// src/patterns/Observer.ts
interface Observer {
    update(state: any): void;
}

interface Observable {
    addObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
}

class ConcreteObservable implements Observable {
    private observers: Observer[] = [];
    private state: any;

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    setState(state: any): void {
        this.state = state;
        this.notifyObservers();
    }

    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.state);
        }
    }
}

export { Observer, ConcreteObservable };
