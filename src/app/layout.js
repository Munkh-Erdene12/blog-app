import React from "react";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import "@/assets/css/style.scss";
import "@/app/gloabal.css";
import MainStore from "@/context/Main";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/vercel.svg" />
      </Head>
      <body className={inter.className}>
        <MainStore>
          <Header />
          {children}
        </MainStore>
      </body>
    </html>
  );
}
