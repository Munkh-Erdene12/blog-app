"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import TredingContent from "./TrendingContent";
import TredingBanner from "./TredingBanner";
const nav = [
  { title: "home", path: "/" },
  { title: "trending", path: "/trending" },
  { title: "content", path: "/content" },
  { title: "shop", path: "/shop" },
  { title: "about me", path: "/about" },
  { title: "contact", path: "/contact" },
];
const hoverNav = ["all", "music", "lifestyle", "sport", "travel"];

export default function Navigation() {
  const pathname = usePathname();
  const [activeTrend, setActiveTrend] = React.useState("all");
  const renderNavLink = (el, index) => {
    const isTrending = el.path === "/trending";
    const handleTrendClick = (el) => {
      setActiveTrend(el === activeTrend ? null : el);
    };
    return (
      <li key={index}>
        <Link href={el.path} className={pathname === el.path ? "active" : ""}>
          {el.title}
        </Link>
        {isTrending && (
          <div className="banner">
            <div className="banner__child">
              <div className="left">
                {hoverNav.map((el, index) => (
                  <TredingContent
                    key={index}
                    value={el}
                    isActive={el === activeTrend}
                    onClick={handleTrendClick}
                  />
                ))}
              </div>
              <div className="right">
                <div className="right__child">
                  <TredingBanner img="https://picsum.photos/200/300?random=1" />
                  <TredingBanner img="https://picsum.photos/200/300?random=2" />
                  <TredingBanner img="https://picsum.photos/200/300?random=3" />
                  <TredingBanner img="https://picsum.photos/200/300?random=4" />
                </div>
              </div>
            </div>
          </div>
        )}
      </li>
    );
  };

  return (
    <ul className="navigation">
      {nav.map((el, index) => renderNavLink(el, index))}
    </ul>
  );
}
