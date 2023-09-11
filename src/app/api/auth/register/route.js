import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import UserSchema from "../../../database/models/users";
export async function POST(request) {
  const cookieStore = cookies();
  const body = await request.json();
  const user = await UserSchema.create(body);
  const token = await user.jsonToken();
  // const refreshToken = await user.refreshToken();
  cookieStore.set("token", token, {
    maxAge: 1 * 60 * 60 * 1000,
    httpOnly: true,
    secure: true,
  });
  return NextResponse.json({
    message: "success",
    expiresIn: 3600,
    user,
    token,
    // refreshToken,
  });
}
