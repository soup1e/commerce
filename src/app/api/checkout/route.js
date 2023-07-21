import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function POST(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  let data = await request.json();
  let priceId = data.priceId;

  return NextResponse.json();
}
