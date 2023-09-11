import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function Logo() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
    console.log("object");
  };
  return (
    <div className="" onClick={handleClick}>
      <Image
        src="/logo__1.jpg"
        alt="logo"
        style={{
          width: "120%",
          height: "100%",
          objectFit: "cover",
          cursor: "pointer",
        }}
        className="img_logo"
        width={100}
        height={100}
        onClick={() => {
          router.push("/");
        }}
      />
    </div>
  );
}
