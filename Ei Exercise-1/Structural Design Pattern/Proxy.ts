// Internet interface
interface Internet {
    connectTo(site: string): void;
  }
  
  // RealInternet class
  class RealInternet implements Internet {
    connectTo(site: string): void {
      console.log(`Connecting to ${site}`);
    }
  }
  
  // ProxyInternet class
  class ProxyInternet implements Internet {
    private realInternet: RealInternet = new RealInternet();
    private bannedSites: string[] = ["banned.com", "blocked.com"];
  
    connectTo(site: string): void {
      if (this.bannedSites.includes(site)) {
        console.log(`Access denied to ${site}`);
      } else {
        this.realInternet.connectTo(site);
      }
    }
  }
  
  // Usage
  const internet = new ProxyInternet();
  internet.connectTo("example.com");
  internet.connectTo("banned.com");
  