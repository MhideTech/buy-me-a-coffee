import React, { useEffect } from 'react';
import CoffeeCard from '@/components/CoffeeCard';
import { usePaystack } from '@/hooks/usePaystack';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { isLoaded, error } = usePaystack();
  const { toast } = useToast();

  useEffect(() => {
    if (error) {
      toast({
        title: "Loading Error",
        description: "Failed to load payment system. Please refresh the page.",
        variant: "destructive"
      });
    }
  }, [error, toast]);

  return <CoffeeCard />;
};

export default Index;
