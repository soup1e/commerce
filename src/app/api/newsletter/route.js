import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { email } = await req.json();

    const record = await prisma.email.create({
      data: {
        name: "Email",
      },
    });

    return NextResponse.json(record);
  } catch (error) {
    console.error("Error creating record:", error);
    return NextResponse.error("Internal Server Error", 500);
  }
}
