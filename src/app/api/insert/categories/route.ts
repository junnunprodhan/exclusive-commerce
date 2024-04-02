import { prisma } from "@/config/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await prisma.category.createMany({
      data: demo,
    });

    return NextResponse.json({ success: true, message: "Success fetch !" });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error?.message || "Something went wrong !",
    });
  }
}

const demo = [
  {
    name: "Woman’s Fashion",
  },
  {
    name: "Men’s Fashion",
  },
  {
    name: "Electronics",
  },
  {
    name: "Home & Lifestyle",
  },
  {
    name: "Medicine",
  },
  {
    name: "Sports & Outdoor",
  },
  {
    name: "Baby’s & Toys",
  },
  {
    name: "Groceries & Pets",
  },
  {
    name: "Health & Beauty",
  },
];
