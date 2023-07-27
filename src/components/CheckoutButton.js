import React, { useState } from "react";
import { useCartContext } from "../app/CartContext";
import { loadStripe } from "@stripe/stripe-js";

const CheckoutButton = () => {
  // const [loading, setLoading] = useState(false);
  // const { cartItems } = useCartContext();

  // console.log(cartItems);

  const handleCheckout = async () => {
    //   const stripePromise = loadStripe(
    //     process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    //   );
    // try {
    // const priceIds = cartItems.map((item) => item.default_price);
    // const response = await fetch("/api/checkout", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ priceIds }), // Send an array of price IDs to the server
    // });
    // setLoading(false);
    //   if (response.ok) {
    //     const data = await response.json();
    //   } else {
    //     console.error(505);
    //   }
    // } catch (error) {
    //   console.error("Error during checkout:", error);
    // }
  };

  return (
    <div>
      <button className="btn btn-accent" onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
};

export default CheckoutButton;
