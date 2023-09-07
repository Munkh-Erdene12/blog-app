import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export async function GET(req, res) {
  return new Response("hi");
}
