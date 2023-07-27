"use client";
import React, { useState } from "react";

const EmailForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const body = {
      email: formData.get("email"),
    };

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Error while submitting email:", response);
      }
    } catch (error) {
      console.error("Error while submitting email:", error);
    }
  };

  return (
    <form onSubmit={sendEmail}>
      {submitted ? (
        <p>Thank you! Your email has been submitted.</p>
      ) : (
        <>
          <input
            placeholder="Email Address"
            className="input input-bordered w-full pr-16"
            name="email"
            type="text"
          />
          <button className="btn btn-accent absolute top-0 right-0 rounded-l-none">
            Submit
          </button>
        </>
      )}
    </form>
  );
};

export default EmailForm;
