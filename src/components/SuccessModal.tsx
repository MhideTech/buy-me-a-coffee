import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  reference: string;
  amount: number;
  userName?: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  reference,
  amount,
  userName
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto bg-card border-coffee-cream">
        <DialogHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-coffee rounded-full flex items-center justify-center animate-bounce-gentle">
            <span className="text-3xl">🎉</span>
          </div>
          
          <DialogTitle className="text-2xl font-bold text-foreground">
            Thank You! ☕
          </DialogTitle>
          
          <DialogDescription className="text-center space-y-2">
            <p className="text-foreground">
              {userName ? `Hey ${userName}, thank you` : 'Thank you'} for buying me a coffee!
            </p>
            <p className="text-sm text-muted-foreground">
              Your generous ₦{amount} contribution means a lot to me.
            </p>
            <div className="mt-4 p-3 bg-coffee-cream rounded-lg">
              <p className="text-xs text-muted-foreground">Transaction Reference:</p>
              <p className="text-sm font-mono text-foreground break-all">{reference}</p>
            </div>
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col space-y-3 mt-6">
          <Button
            onClick={onClose}
            className="w-full bg-gradient-coffee hover:bg-gradient-warm"
          >
            Awesome! ✨
          </Button>
          
          <div className="text-center text-xs text-muted-foreground">
            Want to share the love? Tell your friends about this project!
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;