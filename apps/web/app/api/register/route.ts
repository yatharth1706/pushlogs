// import bcrypt from "bcrypt";
import { prismaClient } from "@pushlogs/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    const body = await req.json();
    console.log(body);
    const { email, password } = body;
    console.log("email", email);
    console.log("password", password);

    if (!email || !password) {
      return new NextResponse("Email and password are required", {
        status: 400,
      });
    }

    const existingUser = await prismaClient.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return new NextResponse("User already exists", {
        status: 400,
      });
    }

    // const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prismaClient.user.create({
      data: {
        email,
        password: password,
      },
    });

    return NextResponse.json(user);
  }
}
