import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function GET(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const products = await stripe.products.list();
  const prices = await stripe.prices.list();

  const responseData = {
    products: products.data,
    prices: prices.data,
  };

  return NextResponse.json(responseData);
}
