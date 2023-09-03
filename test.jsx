import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import css from "../../assets/css/style_.module.css";
import TredingContent from "../tredingContent";
import TredingBanner from "../tredningBanner";

export default function NavMenu() {
  const [activeTrend, setActiveTrend] = useState(null);
  const [information, setInformation] = useState({
    el: ["hi", "hi", "hi", "Hi"],
    img: ["hi", "hi", "hi", "Hi"],
    title: [1, 3, 4, 5],
  });
  const hoverNav = ["all", "music", "lifestyle", "sport", "travel"];
  const nav = ["home", "trending", "features", "shop", "about me", "contact"];

  useEffect(() => {
    switch (activeTrend) {
      case "lifestyle":
        setInformation({
          el: ["hi", "hi", "hi", "Hi"],
          img: ["hi", "hi", "hi", "Hi"],
          title: [1, 3, 4, 5],
        });
        // axios
        //   .get("https://jsonplaceholder.typicode.com/posts")
        //   .then((result) => {
        //     setInformation({ el: result.data });
        //   })
        //   .catch((error) => {
        //     console.error("Error fetching lifestyle posts:", error);
        //   });
        break;
      default:
        setInformation({ el: ["hi"] });
        break;
    }
  }, [activeTrend]);

  const renderNavLink = (content, index) => {
    const toPath = content === "home" ? "/" : `/${content}`;
    const isTrending = content === "trending";

    const handleTrendClick = (el) => {
      setActiveTrend(el === activeTrend ? null : el);
    };

    return (
      <li key={index}>
        <NavLink
          to={toPath}
          className={(active) => (active.isActive ? `${css.active}` : "")}
        >
          {content}
        </NavLink>
        {isTrending && (
          <div className={`${css.banner} ${css.trendingBanner}`}>
            <div className={css.left}>
              {hoverNav.map((el, index) => (
                <TredingContent
                  key={index}
                  value={el}
                  isActive={el === activeTrend}
                  onClick={handleTrendClick}
                />
              ))}
            </div>
            <div className={css.right}>
              <TredingBanner />
            </div>
          </div>
        )}
      </li>
    );
  };

  return (
    <>
      <ul className={css.navigation}>
        {nav.map((el, index) => renderNavLink(el, index))}
      </ul>
    </>
  );
}
