import { authOption } from "@/config/authOption";
import { prisma } from "@/config/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOption);
  try {
    if (!session) {
      return NextResponse.json({
        success: false,
        wishlist: [],
        message: "User not authenticate !",
      });
    }
    const response = await prisma.wishlist.findMany({
      include: { product: true },
      where: {
        user_id: session.user?.id,
      },
    });
    return NextResponse.json({
      success: true,
      wishlist: response,
      message: "Success fetch !",
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      wishlist: [],
      message: "Something went wrong !",
    });
  }
}

export async function POST(req: NextRequest) {
  const { product_id, user_id }: InputWishlist = await req.json();
  try {
    if (!product_id || !user_id) {
      return NextResponse.json({
        success: false,
        message: "Data not valid !",
      });
    }
    await prisma.wishlist.create({
      data: {
        user_id,
        product_id,
      },
    });
    return NextResponse.json({
      success: true,
      message: "Added successfully !",
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong !",
    });
  }
}
