import { authOption } from "@/config/authOption";
import { prisma } from "@/config/prisma";
import bcrypt from "bcrypt";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // Check user authenticate
    const session = await getServerSession(authOption);
    if (!session) {
      return NextResponse.json(
        {
          success: false,
          message: "User not authenticate !",
        },
        { status: 400 }
      );
    }

    // find user info
    const user = await prisma.user.findFirst({
      where: { id: session.user?.id },
    });
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found !",
        },
        { status: 400 }
      );
    }

    const { password, ...other } = user;

    // Send user information
    return NextResponse.json({
      ...other,
      emptyPassword: !password,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong !",
      },
      { status: 400 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    // Check user authenticate
    const session = await getServerSession(authOption);
    if (!session) {
      return NextResponse.json(
        {
          success: false,
          message: "User not authenticate !",
        },
        { status: 400 }
      );
    }
    // Input data from body
    const { address, email, name, password, phone }: InputProfile =
      await req.json();
    if (!name || !password || !phone || !email) {
      return NextResponse.json(
        {
          success: false,
          message: "Required data invalid !",
        },
        { status: 400 }
      );
    }
    // Update operation
    const encrypted = await bcrypt.hash(password, 10);
    await prisma.user.update({
      where: { id: session.user?.id },
      data: { email, name, password: encrypted, phone, address },
    });

    // Send user information
    return NextResponse.json({
      success: true,
      message: "Updated successfully !",
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong !",
      },
      { status: 400 }
    );
  }
}
