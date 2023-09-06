import React from "react";
import Image from "next/image";
export default function Logo() {
  return (
    <div className="">
      <Image
        src="logoipsum-289.svg"
        alt="logo"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        width={500}
        height={200}
        priority
      />
    </div>
  );
}
