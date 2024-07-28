// PaymentProcessor interface
interface PaymentProcessor {
    processPayment(amount: number): void;
  }
  
  // PayPal class
  class PayPal {
    makePayment(amount: number): void {
      console.log(`Processing PayPal payment of $${amount}`);
    }
  }
  
  // Stripe class
  class Stripe {
    charge(amount: number): void {
      console.log(`Processing Stripe payment of $${amount}`);
    }
  }
  
  // Square class
  class Square {
    pay(amount: number): void {
      console.log(`Processing Square payment of $${amount}`);
    }
  }
  
  // PayPalAdapter class
  class PayPalAdapter implements PaymentProcessor {
    constructor(private payPal: PayPal) {}
  
    processPayment(amount: number): void {
      this.payPal.makePayment(amount);
    }
  }
  
  // StripeAdapter class
  class StripeAdapter implements PaymentProcessor {
    constructor(private stripe: Stripe) {}
  
    processPayment(amount: number): void {
      this.stripe.charge(amount);
    }
  }
  
  // SquareAdapter class
  class SquareAdapter implements PaymentProcessor {
    constructor(private square: Square) {}
  
    processPayment(amount: number): void {
      this.square.pay(amount);
    }
  }
  
  // Usage
  const payPalProcessor = new PayPalAdapter(new PayPal());
  const stripeProcessor = new StripeAdapter(new Stripe());
  const squareProcessor = new SquareAdapter(new Square());
  
  payPalProcessor.processPayment(100);
  stripeProcessor.processPayment(200);
  squareProcessor.processPayment(300);
  