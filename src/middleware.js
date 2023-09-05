import { NextResponse, NextRequest } from "next/server";
import mongoSanitize from "express-mongo-sanitize";
import helmet from "helmet";

export async function middleware(req, res, next) {
  const body = await req.json();
  mongoSanitize.sanitize(body);
  mongoSanitize.sanitize(NextRequest.query);
  helmet()(req, res, next);
}
export const config = {
  matcher: "/api/:function*",
};
