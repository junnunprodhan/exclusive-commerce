import { prisma } from "@/config/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await prisma.carousel.createMany({
      data: carousel,
    });

    return NextResponse.json({ success: true, message: "Success fetch !" });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error?.message || "Something went wrong !",
    });
  }
}
const carousel = [
  {
    image:
      "https://res.cloudinary.com/kajolroy/image/upload/v1695298634/banner-demo/iPhone_14_Pro_Desktop_1_vfi2hp.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/kajolroy/image/upload/v1695298634/banner-demo/Mac_Studio_Buy-1277x500_wohjxv.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/kajolroy/image/upload/v1695298631/banner-demo/banner_beueyn.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/kajolroy/image/upload/v1695298629/banner-demo/eSIS-dt-apple-macbook-air-m1-buy-now_uko9pk.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/kajolroy/image/upload/v1695298628/banner-demo/Apple-Banner-Macbook-Pro-M2-Jan-23-Mobile_xcmkyu.jpg",
  },
];
