import React from "react";
import Link from "next/link";
import { FaFacebookF, FaDiscord, FaPinterestP, FaFigma } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <div className="menu">
      <MenuItem icon={<FaFacebookF />} />
      <MenuItem icon={<AiOutlineInstagram />} />
      <MenuItem icon={<FaDiscord />} />
      <MenuItem icon={<FaPinterestP />} />
      <MenuItem icon={<FaFigma />} />
      <MenuItem>
        <Link href="/login">Login</Link>/<Link href="register">Register</Link>
      </MenuItem>
    </div>
  );
}
