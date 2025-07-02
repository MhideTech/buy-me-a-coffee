import React from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

declare global {
  interface Window {
    PaystackPop: {
      setup: (config: PaystackConfig) => {
        openIframe: () => void;
      };
    };
  }
}

interface PaystackConfig {
  key: string;
  email: string;
  amount: number;
  currency: string;
  ref: string;
  metadata?: {
    custom_fields?: Array<{
      display_name: string;
      variable_name: string;
      value: string;
    }>;
  };
  callback: (response: { reference: string; status: string }) => void;
  onClose: () => void;
}

interface PayButtonProps {
  amount: number;
  label: string;
  description: string;
  userName?: string;
  message?: string;
}

const PayButton: React.FC<PayButtonProps> = ({
  amount,
  label,
  description,
  userName = '',
  message = ''
}) => {
  const { toast } = useToast();

  const handlePayment = () => {
    if (!window.PaystackPop) {
      toast({
        title: "Payment Error",
        description: "Payment system not loaded. Please refresh and try again.",
        variant: "destructive"
      });
      return;
    }

    const reference = `coffee_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    const customFields = [];
    if (userName) {
      customFields.push({
        display_name: "Supporter Name",
        variable_name: "supporter_name",
        value: userName
      });
    }
    if (message) {
      customFields.push({
        display_name: "Message",
        variable_name: "message",
        value: message
      });
    }

    const config: PaystackConfig = {
      key: "pk_test_9b0799ba9ae2384a170c322d4c7f9556cfc09775",
      email: "okefolahanolamide2006@gmail.com",
      amount: amount * 100,
      currency: "NGN",
      ref: reference,
      metadata:
        customFields.length > 0 ? { custom_fields: customFields } : undefined,
      callback: (response) => {
        console.log("Payment successful:", response);
        toast({
          title: "Payment Successful! ☕",
          description: `Thank you ${
            userName || ""
          } for the ${label} coffee! Your reference: ${response.reference}.\n\nBest regards, Olamide`,
        });
      },
      onClose: () => {
        console.log("Payment modal closed");
        toast({
          title: "Payment Cancelled",
          description: "No worries! The coffee will be here when you're ready.",
          variant: "destructive",
        });
      },
    };

    try {
      const handler = window.PaystackPop.setup(config);
      handler.openIframe();
    } catch (error) {
      console.error('Paystack error:', error);
      toast({
        title: "Payment Error",
        description: "Failed to open payment modal. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <Button
      onClick={handlePayment}
      className="w-full h-auto p-4 bg-gradient-coffee hover:bg-gradient-warm text-primary-foreground border-0 shadow-coffee hover:shadow-warm transition-all duration-300 hover:scale-105 group"
    >
      <div className="flex items-center justify-between w-full">
        <div className="text-left">
          <div className="font-semibold text-lg">{label}</div>
          <div className="text-sm opacity-90">{description}</div>
        </div>
        <div className="text-2xl group-hover:animate-bounce-gentle">
          ☕
        </div>
      </div>
    </Button>
  );
};

export default PayButton;