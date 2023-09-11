import { NextResponse } from "next/server";
import contentModel from "../../database/models/content";
export async function GET() {
  const content = await contentModel.findAll();
  return NextResponse.json({ message: "true", content });
}
export async function POST(req) {
  const data = await req.json();
  const content = await contentModel.create(data);
  return NextResponse.json({ message: "true", content });
}
