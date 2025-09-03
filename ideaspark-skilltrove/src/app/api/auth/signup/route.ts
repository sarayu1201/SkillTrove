import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { email, password, role } = await req.json();

    // Validate input
    if (!email || !password || !role) {
      return NextResponse.json("Missing required fields", { status: 400 });
    }

    if (password.length < 6) {
      return NextResponse.json("Password must be at least 6 characters", { status: 400 });
    }

    if (!["STUDENT", "PROFESSIONAL"].includes(role)) {
      return NextResponse.json("Invalid role", { status: 400 });
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json("User already exists", { status: 409 });
    }

    // Hash password
    const hashedPassword = await hash(password, 12);

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        passwordHash: hashedPassword,
        role,
        name: email.split("@")[0], // Use email prefix as name
      },
    });

    // Return user without password
    const { passwordHash, ...userWithoutPassword } = user;
    
    return NextResponse.json({
      message: "User created successfully",
      user: userWithoutPassword,
    });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json("Internal server error", { status: 500 });
  }
}