import { NextResponse } from "next/server";

export async function POST() {
  const data = [
    {
      id: 1,
      email: "jimovie@jiflex.com",
      name: "Jimovie",
    },
    {
      id: 2,
      email: "netmovie@jiflex.com",
      name: "Netmovie", 
    }
  ];
  return NextResponse.json(data);
}
