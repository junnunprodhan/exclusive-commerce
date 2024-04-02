import { prisma } from "@/config/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  try {
    if (!id) {
      return NextResponse.json({
        success: false,
        message: "Missing product id !",
      });
    }
    const response = await prisma.product.findFirst({ where: { id } });
    return NextResponse.json({
      success: true,
      product: response,
      message: "Success fetch !",
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong !",
    });
  }
}
