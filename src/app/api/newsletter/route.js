import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request) {
  // const formData = request.body;
  // console.log(formData);
  // try {
  //   await prisma.email.create({
  //     data: {
  //       name: formData.email,
  //     },
  //   });
  //   return;
  // } catch (error) {
  //   console.error("Error while saving email:", error);
  //   return NextResponse.status(500).json({
  //     success: false,
  //     error: "Internal Server Error",
  //   });
  // }
}
