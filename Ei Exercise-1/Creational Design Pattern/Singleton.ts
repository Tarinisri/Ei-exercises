// ConfigurationManager class
class ConfigurationManager {
    private static instance: ConfigurationManager;
    private config: { [key: string]: string } = {};
  
    private constructor() {}
  
    static getInstance(): ConfigurationManager {
      if (!ConfigurationManager.instance) {
        ConfigurationManager.instance = new ConfigurationManager();
      }
      return ConfigurationManager.instance;
    }
  
    set(key: string, value: string): void {
      this.config[key] = value;
    }
  
    get(key: string): string | undefined {
      return this.config[key];
    }
  }
  
  // Usage
  const configManager1 = ConfigurationManager.getInstance();
  configManager1.set("appName", "My Application");
  
  const configManager2 = ConfigurationManager.getInstance();
  console.log(configManager2.get("appName")); // Output: My Application
  