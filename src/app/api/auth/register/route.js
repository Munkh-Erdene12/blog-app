import { NextResponse, NextRequest } from "next/server";
import UserSchema from "@/app/database/models/users";
export async function POST(req) {
  const data = await req.json();
  const registerUser = await UserSchema.create(data);
  const refreshToken = await registerUser.refreshToken();
  const token = await registerUser.jsonToken();
  // Header-г тодорхойлох
  //   const headers = {
  //     "Content-Type": "application/json", // Жагсаалтын төрөл
  //     "Custom-Header": "Custom-Value", // Өөрийн header-г тодорхойлох
  //   };

  return NextResponse.json({
    message: "success",
    refreshToken,
    token,
    registerUser,
  });
}
