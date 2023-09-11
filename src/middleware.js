import { verifyAuth } from "./app/lib/VerifyAuth";
import { NextResponse } from "next/server";
export async function middleware(request, response) {
  const token = request.cookies.get("token")?.value || "";
  // const verifiedToken =
  //   token &&
  //   (await verifyAuth(token).catch((err) => {
  //     console.log(err);
  //   }));
  // if (request.nextUrl.pathname.startsWith("/admin")) {
  //   if (
  //     verifiedToken.role === "user" ||
  //     verifiedToken === "" ||
  //     verifiedToken.role === "publisher" ||
  //     token === ""
  //   ) {
  //     return NextResponse.redirect(new URL("/not-found", request.nextUrl));
  //   }
  // } else if (request.nextUrl.pathname.startsWith("/publisher")) {
  //   if (verifiedToken.role === "user" || verifiedToken === "" || token === "") {
  //     return NextResponse.redirect(new URL("/not-found", request.nextUrl));
  //   }
  // }
}
