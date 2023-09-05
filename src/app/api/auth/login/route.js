import UserSchema from "@/app/database/models/users";
import { NextResponse } from "next/server";
import { middleware } from "../../../../../middleware/sanitize";
export async function POST(req, res) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json(
        { error: "Имэйл болон нууц үгээ дамжуулна уу" },
        { status: 400, statusText: "Bad Request" }
      );
    }

    const user = await UserSchema.findOne({ where: { email } });

    if (!user) {
      return NextResponse.json(
        { error: "Имэйл болон нууц үгээ зөв оруулна уу" },
        { status: 400, statusText: "Bad Request" }
      );
    }

    const isPasswordValid = await user.checkPassword(password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Имэйл болон нууц үгээ зөв оруулна уу" },
        { status: 400, statusText: "Bad Request" }
      );
    }

    return NextResponse.json({
      message: "User",
      refreshToken: user.refreshToken(),
      token: user.jsonToken(),
      user,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500, statusText: "Internal Server Error" }
    );
  }
}
