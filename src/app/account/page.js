"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Page() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <section className="h-screen bg-dark">
        <h1>Name: {session.user.name}</h1>
        <p>Email: {session.user.email}</p>
      </section>
    );
  } else {
    redirect("/");
  }
}
