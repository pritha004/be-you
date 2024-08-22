import Stripe from "stripe";

export default async function handler(req: any, res: any) {
  const { lineItems } = req.body;
  try {
    if (req.headers["content-type"] !== "application/json") {
      return res.status(400).json({ error: "Invalid Content-Type" });
    }

    if (!lineItems) {
      return res.status(400).json({ error: "lineItems is required" });
    }

    if (process.env.VITE_STRIPE_SECRET_KEY) {
      const stripe = new Stripe(process.env.VITE_STRIPE_SECRET_KEY);
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: `${process.env.VITE_CLIENT_URL}/success`,
        cancel_url: `${process.env.VITE_CLIENT_URL}/canceled`,
      });

      res.status(200).json({ id: session.id });
    }
  } catch (error) {
    console.error(error, lineItems);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
