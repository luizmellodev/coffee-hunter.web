// This is a mock implementation that will be replaced with real Stripe integration later
interface MockCheckoutSession {
  id: string;
  url: string;
}

export const createCheckoutSession = async (ebookId: string, price: string): Promise<MockCheckoutSession> => {
  console.log('Mock: Creating checkout session for:', { ebookId, price });
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return {
    id: 'mock-session-id',
    url: '#',
  };
}; 