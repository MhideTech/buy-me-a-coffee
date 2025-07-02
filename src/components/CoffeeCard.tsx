import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PayButton from './PayButton';

const CoffeeCard: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');

  const amounts = [
    { value: 500, label: '₦500', description: 'A small coffee' },
    { value: 1000, label: '₦1,000', description: 'A large coffee' },
    { value: 1500, label: '₦1,500', description: 'Coffee & pastry' }
  ];

  return (
    <div className="min-h-screen bg-gradient-cream flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 bg-card shadow-coffee border-0 relative overflow-hidden">
        <div className="absolute top-4 right-4 text-coffee-brown opacity-30">
          <div className="animate-coffee-steam">☁</div>
          <div className="animate-coffee-steam" style={{ animationDelay: '0.5s' }}>☁</div>
          <div className="animate-coffee-steam" style={{ animationDelay: '1s' }}>☁</div>
        </div>

        <div className="text-center space-y-6">
          <div className="space-y-4">
            <div className="relative inline-block">
              <div className="w-24 h-24 bg-gradient-coffee rounded-full flex items-center justify-center text-4xl animate-bounce-gentle mx-auto shadow-warm">
                ☕
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-coffee-gold rounded-full flex items-center justify-center text-xs animate-pulse-warm">
                ✨
              </div>
            </div>
            
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-foreground">
                Buy me a coffee!
              </h1>
              <p className="text-muted-foreground">
                Hey! Buy me a coffee if you like my work 😄
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium text-foreground">Choose an amount:</h3>
            <div className="grid gap-3">
              {amounts.map((amount) => (
                <PayButton
                  key={amount.value}
                  amount={amount.value}
                  label={amount.label}
                  description={amount.description}
                  userName={userName}
                  message={message}
                />
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-border">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm text-foreground">
                Your name (optional)
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name..."
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="bg-background border-coffee-cream focus:border-coffee-brown transition-colors"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm text-foreground">
                Leave a message (optional)
              </Label>
              <Input
                id="message"
                type="text"
                placeholder="Say something nice..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-background border-coffee-cream focus:border-coffee-brown transition-colors"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="pt-4 text-xs text-muted-foreground">
            Powered by Paystack • Secure payments
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CoffeeCard;