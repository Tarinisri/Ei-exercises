// Subject interface
interface Subject {
    registerObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
  }
  
  // Observer interface
  interface Observer {
    update(temperature: number, humidity: number, pressure: number): void;
  }
  
  // WeatherStation class (Subject)
  class WeatherStation implements Subject {
    private observers: Observer[] = [];
    private temperature: number = 0;
    private humidity: number = 0;
    private pressure: number = 0;
  
    registerObserver(observer: Observer): void {
      this.observers.push(observer);
    }
  
    removeObserver(observer: Observer): void {
      const index = this.observers.indexOf(observer);
      if (index > -1) {
        this.observers.splice(index, 1);
      }
    }
  
    notifyObservers(): void {
      for (const observer of this.observers) {
        observer.update(this.temperature, this.humidity, this.pressure);
      }
    }
  
    setWeatherData(temperature: number, humidity: number, pressure: number): void {
      this.temperature = temperature;
      this.humidity = humidity;
      this.pressure = pressure;
      this.notifyObservers();
    }
  }
  
  // DisplayDevice class (Observer)
  class DisplayDevice implements Observer {
    constructor(private name: string) {}
  
    update(temperature: number, humidity: number, pressure: number): void {
      console.log(`${this.name} Display - Temperature: ${temperature}°C, Humidity: ${humidity}%, Pressure: ${pressure} hPa`);
    }
  }
  
  // Usage
  const weatherStation = new WeatherStation();
  const display1 = new DisplayDevice("Living Room");
  const display2 = new DisplayDevice("Bedroom");
  
  weatherStation.registerObserver(display1);
  weatherStation.registerObserver(display2);
  
  weatherStation.setWeatherData(25, 65, 1013);
  weatherStation.setWeatherData(30, 70, 1009);
  