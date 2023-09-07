import { NextRequest } from "next/server";

export function middleware(request, response) {
  console.log("request " + request.nextUrl.pathname);
  const cookie = request.cookies.get("token")?.value;
  //   console.log("cookie: " + cookie);
  //   if (request.nextUrl.pathname.startsWith("/")) {
  //     console.log("first path");
  //   }
  //   console.log("object");
}
