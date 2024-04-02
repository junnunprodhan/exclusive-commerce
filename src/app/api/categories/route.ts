import { prisma } from "@/config/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const response = await prisma.category.findMany();

    return NextResponse.json({
      success: true,
      categories: response,
      message: "Success response !",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong !",
    });
  }
}
