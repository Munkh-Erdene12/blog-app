import { NextResponse } from "next/server";
import UserSchema from "../../../database/models/users";
export async function POST(request) {
  const body = await request.json();
  console.log(body);
  const user = await UserSchema.create(body);
  const token = await user.jsonToken();
  const refreshToken = await user.refreshToken();
  return NextResponse.json({
    message: "success",
    expiresIn: 3600,
    user,
    token,
    refreshToken,
  });
}
