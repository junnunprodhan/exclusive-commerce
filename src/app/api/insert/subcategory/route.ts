import { prisma } from "@/config/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await prisma.subcategory.createMany({
      data: electronics,
    });

    return NextResponse.json({ success: true, message: "Success fetch !" });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error?.message || "Something went wrong !",
    });
  }
}

const electronics = [
  {
    name: "Phones",
    icon: "fi fi-rr-mobile-button",
    category_id: "651ec985271df208b5b0faa7",
  },
  {
    name: "Computers",
    icon: "fi fi-rs-computer",
    category_id: "651ec985271df208b5b0faa7",
  },
  {
    name: "Smart Watch",
    icon: "fi fi-rs-watch-smart",
    category_id: "651ec985271df208b5b0faa7",
  },
  {
    name: "Camera",
    icon: "fi fi-rr-camera",
    category_id: "651ec985271df208b5b0faa7",
  },
  {
    name: "Head Phones",
    icon: "fi fi-rs-headphones",
    category_id: "651ec985271df208b5b0faa7",
  },
  {
    name: "Gaming",
    icon: "fi fi-rr-gamepad",
    category_id: "651ec985271df208b5b0faa7",
  },
  {
    name: "Mouse",
    icon: "fi fi-rs-mouse",
    category_id: "651ec985271df208b5b0faa7",
  },
  {
    name: "Keyboard",
    icon: "fi fi-rs-keyboard",
    category_id: "651ec985271df208b5b0faa7",
  },
  {
    name: "Laptop",
    icon: "fi fi-rr-laptop-mobile",
    category_id: "651ec985271df208b5b0faa7",
  },
];
