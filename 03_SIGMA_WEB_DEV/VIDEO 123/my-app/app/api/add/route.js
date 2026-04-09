import { NextResponse } from "next/server";

export async function POST(request) {
    const data = await request.json();
    console.log(data);
    return NextResponse.json({ response:true , data, message: "Data received successfully" }); 
}