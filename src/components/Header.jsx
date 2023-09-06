"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "./logo";
import Navigation from "./Navigation";
import Menu from "./Menu";

// ...
export default function Header() {
  const path = usePathname();
  const [sticky, setSticky] = React.useState("");
  const [header, setHeader] = React.useState(false);

  React.useEffect(() => {
    // if (path === "/admin") {
    //   setHeader(true);
    // } else {
    //   setHeader(false);
    // }
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setSticky("sticky");
      } else {
        setSticky("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [path]);

  return (
    !header && (
      <header className={`${sticky}`}>
        {path !== "/admin" ? (
          <>
            <div className="logo">
              <Logo />
            </div>
            <Navigation />
            <Menu />
          </>
        ) : (
          <input type="text" placeholder="Search" />
        )}
      </header>
    )
  );
}
