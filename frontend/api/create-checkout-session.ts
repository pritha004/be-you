import Stripe from 'stripe';

const stripe = new Stripe(import.meta.env.VITE_STRIPE_SECRET_KEY);

export default async function handler(event:any) {

  const { lineItems } = JSON.parse(event.body);
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: `${import.meta.env.VITE_CLIENT_URL}/success`,
        cancel_url: `${import.meta.env.VITE_CLIENT_URL}/canceled`,
      });

      return {
        statusCode: 200,
        body: JSON.stringify({ id: session.id }),
      };
    } catch (error) {
      console.error(error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal Server Error' }),
      };
    }
  };