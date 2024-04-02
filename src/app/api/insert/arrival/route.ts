import { prisma } from "@/config/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await prisma.arrival.createMany({
      data: arrival,
    });

    return NextResponse.json({ success: true, message: "Success fetch !" });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error?.message || "Something went wrong !",
    });
  }
}
const arrival = [
  {
    name: "PlayStation 5",
    subcategory_id: "651ed0a404009a8e811d7eda",
    image:
      "https://res.cloudinary.com/kajolroy/image/upload/v1695353227/apple%20image/sony-playstation-5-black-version_c7xrkg.jpg",
    description: "Black and White version of the PS5 coming out on sale.",
  },
  {
    name: "Apple Collections",
    subcategory_id: "651ed0a404009a8e811d7edb",
    image:
      "https://res.cloudinary.com/kajolroy/image/upload/v1695352663/apple%20image/896c8e847fc11704a8d1d1e667f174cb_g19t7q.jpg",
    description: "Featured woman collections that give you another vibe.",
  },
  {
    name: "Speakers",
    subcategory_id: "651ed0a404009a8e811d7ed9",
    image:
      "https://res.cloudinary.com/kajolroy/image/upload/v1695353151/apple%20image/cq5dam.web.320.320_pw2cjw.jpg",
    description: "Amazon wireless speakers",
  },
  {
    name: "Perfume",
    subcategory_id: "651ed0a404009a8e811d7edd",
    image:
      "https://res.cloudinary.com/kajolroy/image/upload/v1695352909/apple%20image/luxurious-perfume-bottle-with-black-details-dark-background_7023-57139_i9lcxe.jpg",
    description: "GUCCI INTENSE OUD EDP",
  },
];
