import { NextResponse } from "next/server";
import categoryModel from "../../../database/models/category";
export async function GET() {
  const categories = await categoryModel.findAll();
  return NextResponse.json({ message: "succes", categories });
}
export async function POST(req) {
  const data = await req.json();
  const category = await categoryModel.create(data);
  return NextResponse.json({ message: "succes", category });
}
