import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Publisher dashboard",
  description: "Generated by create next app",
};
export default function AdminLayout(props) {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "#101112",
        color: "white",
      }}
    >
      {props.children}
    </div>
  );
}
