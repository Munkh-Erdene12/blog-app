// components/AdminLayout.js
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Register",
  description: "Generated by create next app",
};
export default function LoginLayout(props) {
  return <div>{props.children}</div>;
}
