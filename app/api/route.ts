import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    country:"korea",    
    }
    return NextResponse.json(data);
  };

  export async function POST(req:Request) {
    const data=await req.json();

      return NextResponse.json(data);
    };


