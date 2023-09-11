import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaDiscord, FaPinterestP, FaFigma } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

import MenuItem from "./MenuItem";

export default function Menu() {
  const path = usePathname();
  return (
    <div className="menu">
      <MenuItem icon={<FaFacebookF />} />
      <MenuItem icon={<AiOutlineInstagram />} />
      <MenuItem icon={<FaDiscord />} />
      <MenuItem icon={<FaPinterestP />} />
      <MenuItem icon={<FaFigma />} />
      <MenuItem>
        {/* <div
          style={{
            width: "35px",
            height: "35px",
            background: "red",
            borderRadius: "50%",
          }}
        ></div> */}
        {path !== "/auth/login" && path !== "/auth/register" && (
          <span>
            <Link href="/auth/login">Login</Link> /{" "}
            <Link href="/auth/register">Register</Link>
          </span>
        )}
      </MenuItem>
    </div>
  );
}
