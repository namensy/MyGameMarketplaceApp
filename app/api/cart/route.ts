import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    user: null,
    message: "Mock session (not implemented yet)",
  });
}