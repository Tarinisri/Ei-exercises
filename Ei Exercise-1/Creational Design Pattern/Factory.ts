// INotification interface
interface INotification {
    send(message: string): void;
  }
  
  // EmailNotification class
  class EmailNotification implements INotification {
    send(message: string): void {
      console.log(`Sending Email: ${message}`);
    }
  }
  
  // SMSNotification class
  class SMSNotification implements INotification {
    send(message: string): void {
      console.log(`Sending SMS: ${message}`);
    }
  }
  
  // PushNotification class
  class PushNotification implements INotification {
    send(message: string): void {
      console.log(`Sending Push Notification: ${message}`);
    }
  }
  
  // NotificationFactory class
  abstract class NotificationFactory {
    abstract createNotification(): INotification;
  
    sendNotification(message: string): void {
      const notification = this.createNotification();
      notification.send(message);
    }
  }
  
  // EmailNotificationFactory class
  class EmailNotificationFactory extends NotificationFactory {
    createNotification(): INotification {
      return new EmailNotification();
    }
  }
  
  // SMSNotificationFactory class
  class SMSNotificationFactory extends NotificationFactory {
    createNotification(): INotification {
      return new SMSNotification();
    }
  }
  
  // PushNotificationFactory class
  class PushNotificationFactory extends NotificationFactory {
    createNotification(): INotification {
      return new PushNotification();
    }
  }
  
  // Usage
  const emailFactory = new EmailNotificationFactory();
  emailFactory.sendNotification("Hello via Email!");
  
  const smsFactory = new SMSNotificationFactory();
  smsFactory.sendNotification("Hello via SMS!");
  
  const pushFactory = new PushNotificationFactory();
  pushFactory.sendNotification("Hello via Push Notification!");
  