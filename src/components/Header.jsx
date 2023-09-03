"use client";
import React from "react";
import Logo from "./logo";
import Navigation from "./Navigation";
import Menu from "./Menu";

export default function Header() {
  const [sticky, setSticky] = React.useState("");

  React.useEffect(() => {
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
  }, []);

  return (
    <header className={`${sticky}`}>
      <div className="logo">
        <Logo />
      </div>
      <Navigation />
      <Menu />
    </header>
  );
}
