"use client";
import React from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Content from "../components/Content";
import Footer from "../components/Footer";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineInstagram,
  AiOutlineHeart,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import {
  BsArrowRightCircle,
  BsArrowLeftCircle,
  BsArrowRightShort,
} from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import ShareIcon from "../components/ShareIcon";
import ShareBox from "../components/ShareBox";
import SmallTitle from "../components/SmallTitle";
import LargeTitle from "../components/LargeTitle";
import InfoTitle from "../components/InfoTitle";
import CustomImage from "../components/CustomImage";
import Content__1 from "../components/Content__1";
import Main_child_item from "../components/Main_child_item";
import Border from "../components/Border";
const trendingBannerData = [
  { img: "/1-1.jpeg", text: "Summer stripes" },
  { img: "/2-2.jpeg", text: "Favorite sneakers" },
  { img: "/3-3.jpeg", text: "Scandinavian" },
];

import tredingData from "../app/database/treding";
export default function Page() {
  const params = useParams();
  const router = useRouter();
  const [page, setPage] = React.useState(1);
  const [submitEmail, setSubmitEmail] = React.useState("");
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const handlePrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === trendingBannerData.length - 1 ? 0 : prev - 1
    );
  };
  const handleNextSlide = () => {
    setCurrentSlide((prev) =>
      prev === trendingBannerData.length - 1 ? 0 : prev + 1
    );
  };
  const SubmitEmail = (e) => {
    e.preventDefault();
    if (submitEmail.length === 0) {
      return toast.warn("🦄 Wow so easy!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.success("🦄 Wow so easy!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div style={{ position: "relative", height: "730vh" }}>
      {setSubmitEmail.length === 0 ? (
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      ) : (
        <>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <ToastContainer />
        </>
      )}
      <div className="wrapper">
        <Image
          src="/hero.jpeg"
          alt="hero"
          className="img"
          width={500}
          height={200}
        />
        <p className="img__children">Hello...</p>
        <div className="item-container">
          <AiOutlineArrowLeft />
          {tredingData.map((el) => (
            <Content
              key={el.id}
              img={el.img}
              link="#"
              value={el.title}
              date={el.date}
              onClick={() => router.push(`/detail?id=${el.id}`)}
            />
          ))}
          <AiOutlineArrowRight />
        </div>
      </div>
      <div className="container">
        <main>
          <div className="main__left">
            <SmallTitle value="Lifestyle" link="#" />
            <LargeTitle value="SUMMER VOCATION" link="#" />
            <figure>
              <CustomImage img="/main-hero.jpeg" alt="main" name="main-img" />

              <div>
                <span className="day">09</span>
                <span className="month">SEP</span>
              </div>
            </figure>
            <div className="post--content">
              You’ve gotta dance like there’s nobody watching, Love like you’ll
              never be hurt, sing like there’s nobody listening, and live like
              it’s heaven on earth. Only once in your life, I truly believe, you
              find someone who can completely turn your world around. You tell
              them things that you’ve never shared with another soul and
            </div>
            <div className="action">
              <div className="meta">
                <div className="post-like">
                  <div className="item-like">
                    <Link href="#">
                      <AiOutlineHeart />
                    </Link>
                    <span>176</span> Likes
                  </div>
                </div>
                <div className="post-view">417 views</div>
              </div>
              <div className="post-more">
                <BsArrowRightShort />
                <Link href="#">Read more</Link>
              </div>
              <ShareBox style="shareBox">
                <ShareIcon icon={<FaFacebookF />} />
                <ShareIcon icon={<AiOutlineTwitter />} />
                <ShareIcon icon={<FaInstagram />} />
              </ShareBox>
            </div>
            <div className="main_item_container">
              <Main_child_item
                img="/1-1.jpeg"
                LargeTitle="PORTUGAL’S SUNSET"
                smallTitle="Lifestyle"
              />
              <Main_child_item
                img="/2-2.jpeg"
                LargeTitle="PORTUGAL’S SUNSET"
                smallTitle="Lifestyle"
              />
              <Main_child_item
                img="/3-3.jpeg"
                LargeTitle="PORTUGAL’S SUNSET"
                smallTitle="Music"
              />
              <Main_child_item
                img="/4-4.jpeg"
                smallTitle="Travel"
                LargeTitle="PORTUGAL’S SUNSET"
              />
            </div>
            <div className="main-content">
              <div className="img">
                <CustomImage
                  img="/banner_1.avif"
                  alt="banner_1"
                  name="img_child"
                />
              </div>
              <div className="main-content-child">
                <div>
                  <SmallTitle value="Travel" />
                  <LargeTitle value="Best day" />
                  <p className="desc">
                    Sail away from the safe harbor. Catch the trade winds in
                    your sails. Explore. Dream. Discover...
                  </p>
                  <Border />
                  <div className="action" style={{ borderBottom: "none" }}>
                    <div className="meta">
                      <div className="post-like">
                        <div className="item-like">
                          <Link href="#">
                            <AiOutlineHeart />
                          </Link>
                          <span>176</span> Likes
                        </div>
                      </div>
                      <div className="post-view">417 views</div>
                    </div>
                    <div className="post-more__child">
                      <BsArrowRightShort />
                      <Link href="#">Read more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main_item_container">
              <Main_child_item
                img="/1-1.jpeg"
                LargeTitle="PORTUGAL’S SUNSET"
                smallTitle="Lifestyle"
              />
              <Main_child_item
                img="/2-2.jpeg"
                LargeTitle="PORTUGAL’S SUNSET"
                smallTitle="Lifestyle"
              />
              <Main_child_item
                img="/3-3.jpeg"
                LargeTitle="PORTUGAL’S SUNSET"
                smallTitle="Music"
              />
              <Main_child_item
                img="/4-4.jpeg"
                smallTitle="Travel"
                LargeTitle="PORTUGAL’S SUNSET"
              />
            </div>
            <div className="page">
              <div
                className={page === 1 ? "active paginate" : "paginate"}
                onClick={() => setPage(1)}
              >
                1
              </div>
              <div
                className={page === 2 ? "active paginate" : "paginate"}
                onClick={() => setPage(2)}
              >
                2
              </div>
              <div
                className={page === 3 ? "active paginate" : "paginate"}
                onClick={() => setPage(3)}
              >
                3
              </div>
              <div
                className={page === 4 ? "active paginate" : "paginate"}
                onClick={() => setPage(4)}
              >
                ...
              </div>
            </div>
          </div>
          <div className="main__right">
            <InfoTitle value="About Me" />
            <div className="div">
              <div className="profile">
                <Image
                  src="/profile.png"
                  alt="profile"
                  width={100}
                  height={100}
                  className="profile__img"
                />
              </div>
              <div className="content">
                Love like you ll never be hurt, Sing like theres nobody
                listening. <div className="signature">John James</div>
              </div>
              <div className="border_bottom"></div>
              <ShareBox>
                <ShareIcon icon={<FaFacebookF />} />
                <ShareIcon icon={<AiOutlineTwitter />} />
                <ShareIcon icon={<AiFillInstagram />} />
                <ShareIcon icon={<FaInstagram />} />
              </ShareBox>
              <InfoTitle value="Instagram" style={{ margin: "30px 0px" }} />
            </div>
            <div className="subscribe">
              <div className="imgInbox">
                <CustomImage alt="inbox" img="/inbox.gif" />
              </div>
              <h3>
                <span>NewsLetter </span>
              </h3>
              <p>
                Get the latest fashion trends, the best in travel and my life.
              </p>
              <form action="" style={{ height: "100px" }}>
                <div className="input-group">
                  <input type="text" />
                  <label htmlFor="">Enter your email</label>
                </div>
                <button
                  style={
                    submitEmail.length === 0
                      ? { cursor: "not-allowed" }
                      : { cursor: "pointer" }
                  }
                  onClick={(e) => {
                    SubmitEmail(e);
                  }}
                >
                  Sign in up!
                </button>
              </form>
            </div>
            <InfoTitle value="TRENDING" />
            <div className="treding__banner">
              <div className="treding__container">
                {trendingBannerData.map((el, index) => (
                  <div key={index}>
                    <Image
                      key={index}
                      src={el.img}
                      alt="treding image"
                      width={299}
                      height={200}
                      className={`img ${
                        currentSlide === index ? "active" : ""
                      }`}
                    />
                    <p
                      className={`content ${
                        currentSlide === index ? "active" : ""
                      }`}
                    >
                      {el.text}
                    </p>
                  </div>
                ))}
              </div>
              <div className="action_1">
                <BsArrowLeftCircle onClick={() => handlePrevSlide()} />
                <BsArrowRightCircle onClick={() => handleNextSlide()} />
              </div>
            </div>
            <figure>
              <CustomImage img="/banner.jpeg" alt="banner" name="banner" />
            </figure>
            <InfoTitle value="Lorem" />
            <div className="save">
              <Content__1
                img="/1-1.jpeg"
                value="Scandinavian"
                date="JUN 13, 2023"
              />
              <Content__1
                img="/2-2.jpeg"
                value="Favorite Sneakers"
                date="JUN 13, 2023"
              />
              <Content__1
                img="/3-3.jpeg"
                value="Portugal’s Sunset"
                date="JUN 13, 2023"
              />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
