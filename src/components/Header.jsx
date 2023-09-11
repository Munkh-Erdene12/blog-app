"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "./logo";
import Navigation from "./Navigation";
import Menu from "./Menu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { TfiWrite } from "react-icons/tfi";
import { PiNotebookDuotone } from "react-icons/pi";
//
import { BiHelpCircle } from "react-icons/bi";
import Image from "next/image";
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
      <header
        className={`${sticky}`}
        style={
          path === "/"
            ? {
                width: "100%",
                height: "70px",
                padding: "20px",
              }
            : {
                padding: 0,
              }
        }
      >
        {path === "/publisher" ? (
          <div className="publisher">
            <div
              className="child_1"
              style={{
                display: "flex",
                width: "450px",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h4
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Blog App
              </h4>
              <input
                type="text"
                placeholder="Search"
                className="searchPublisher"
              />
              <div
                style={{
                  display: "flex",
                  background: "#22344D",
                  height: "40px",
                  width: "100px",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                  fontSize: "15px",
                  cursor: "pointer",
                }}
              >
                <PiNotebookDuotone style={{ color: "#abccfd" }} />
                <p style={{ color: "#ABCCFD" }}>content</p>
              </div>
            </div>
            <div>
              <div className="cm">
                <div className="help">
                  <BiHelpCircle />
                  <p>Help and resources</p>
                </div>
                <div className="status">
                  <HiOutlineStatusOnline />
                </div>
                <div className="profile">
                  <Image
                    src="/profile.png"
                    alt=""
                    className="img"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="down">
                  <MdKeyboardArrowDown />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="logo">
              <Logo />
            </div>
            <Navigation />
            <Menu />
          </>
        )}
      </header>
    )
  );
}
