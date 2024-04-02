import { prisma } from "@/config/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const response = await prisma.arrival.findMany({
      where: { status: "active" },
    });
    return NextResponse.json({
      success: true,
      arrival: response,
      message: "Success fetch !",
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong !",
    });
  }
}
