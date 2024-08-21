import Stripe from "stripe";

export default async function handler(event: any) {
  const { lineItems } = JSON.parse(event.body);
  try {
    if (process.env.VITE_STRIPE_SECRET_KEY) {
      const stripe = new Stripe(process.env.VITE_STRIPE_SECRET_KEY);
      const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: "payment",
        success_url: `${import.meta.env.VITE_CLIENT_URL}/success`,
        cancel_url: `${import.meta.env.VITE_CLIENT_URL}/canceled`,
      });

      return {
        statusCode: 200,
        body: JSON.stringify({ id: session.id }),
      };
    }
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
}
