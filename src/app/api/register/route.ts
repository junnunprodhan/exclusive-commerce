import { prisma } from "@/config/prisma";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { emailOrPhone, name, password }: InputUser = await req.json();

  if (!emailOrPhone || !name || !password) {
    return NextResponse.json({
      success: false,
      message: "Invalid your input data !",
    });
  }
  try {
    const encrypted = await bcrypt.hash(password, 10);
    const email = emailOrPhone.includes("@");

    await prisma.user.create({
      data: {
        name,
        email: email ? emailOrPhone : "",
        phone: !email ? emailOrPhone : "",
        password: encrypted,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Registration successfully !",
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong !",
    });
  }
}
