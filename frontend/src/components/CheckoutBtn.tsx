import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CartProduct, Product } from '../models/Product';
const { VITE_STRIPE_PUBLISHABLE_KEY, VITE_CLIENT_URL } = import.meta.env;
const stripePromise = loadStripe(VITE_STRIPE_PUBLISHABLE_KEY);

const CheckoutBtn = ({ products }:{products:CartProduct[]}) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async () => {
    const lineItems = products.map((product : CartProduct) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: product.name,
          //images: product.imgURL,
        },
        unit_amount: product.price,
      },
      quantity: product.quantity,
    }));

    try {
      setIsProcessing(true);
      const stripe = await stripePromise;
      if(!stripe){
            throw new Error('Stripe failed to initialize');
      }
      const session = await fetch(
        `${VITE_CLIENT_URL}/api/create-checkout-session`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ lineItems }),
        }
      ).then((response) => response.json());

      // Redirect to Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error:any) {
      console.error(error.message);
    }finally {
        setIsProcessing(false);
      }
  };

  return (
    <>
      <button className='px-4 py-2 w-full bg-black dark:bg-white text-white dark:text-black' onClick={handleCheckout} disabled={isProcessing}>
        {isProcessing ? "Processing..." : 'CHECKOUT'}
      </button>
    </>
  );
};

export default CheckoutBtn;