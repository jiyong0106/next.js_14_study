import { NextResponse } from "next/server";

export async function POST() {
  const data = {
    profile: {
      id: 1,
      email: "jimovie@jiflex.com",
      name: "Jimovie",
    },
  };
  return NextResponse.json(data);
}
