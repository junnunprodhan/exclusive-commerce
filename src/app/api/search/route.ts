import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/config/prisma";


export  async function GET(req:NextRequest){
    const keyword = req.nextUrl.searchParams.get("keyword") as string

    try {
        const response = await prisma.product.findMany({
            take: 30,
            where:{
                title:{
                    contains:keyword,
                    mode:"insensitive"
                }
            }
        });
        return NextResponse.json({
            success: true,
            products: response,
            message: "Success fetch !",
        });
    }catch (e) {
        return NextResponse.json({
            success: false,
            message: "Something went wrong !",
            products: [],
        });
    }
}