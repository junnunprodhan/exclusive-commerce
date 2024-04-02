import { prisma } from "@/config/prisma";
import { NextRequest, NextResponse } from "next/server";

type SalesType = "best_sale" | "flash_sale" | "popular" | null;

export async function GET(req: NextRequest) {
  // Type of Sale sales_type = best/flash
  const typeOfSales = req.nextUrl.searchParams.get("type") as SalesType;
  // Pagination Query
  const limit = Number(req.nextUrl.searchParams.get("limit"));
  const page_number = Number(req.nextUrl.searchParams.get("page"));

  try {
    // if sales type is
    if (typeOfSales) {
      const salesResponse = await prisma.product.findMany({
        take: limit || 16,
        skip: page_number && limit ? page_number * limit - limit : 0,
        where: {
          typeOfSales,
        },
      });
      return NextResponse.json({
        success: true,
        products: salesResponse,
        message: "Success fetch !",
      });
    }
    // without sales types
    const response = await prisma.product.findMany({
      take: limit || 16,
      skip: page_number && limit ? page_number * limit - limit : 0,
    });
    const total = await prisma.product.count();
    return NextResponse.json({
      success: true,
      products: response,
      total,
      message: "Success fetch !",
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong !",
    });
  }
}
