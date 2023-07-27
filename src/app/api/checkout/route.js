import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  try {
    const { priceId } = req.body;
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/success", // Redirect URL after successful payment
      cancel_url: "http://localhost:3000/cancel", // Redirect URL after payment is canceled
    });

    return res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Error during checkout:", error);
    return res.status(500).end(); // Internal Server Error
  }
}
