import UserSchema from "@/app/database/models/users";
import asyncHanlder from "@/asyncHandler";
import { NextResponse, NextRequest } from "next/server";
export async function GET(req, res) {
  asyncHanlder((req, res) => {
    return NextResponse.json({ message: "OK" });
  });
}
