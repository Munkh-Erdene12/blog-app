import React from "react";
import Link from "next/link";
import Image from "next/image";
import Content from "@/components/Content";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineInstagram,
  AiOutlineHeart,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import ShareIcon from "@/components/ShareIcon";
import ShareBox from "@/components/ShareBox";
import SmallTitle from "@/components/SmallTitle";
import LargeTitle from "@/components/LargeTitle";
import InfoTitle from "@/components/InfoTitle";
import Main_child_item from "../components/Main_child_item";
export default function page() {
  return (
    <React.Fragment>
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
          <Content
            img="/1.jpg"
            link="#"
            value="Talking time"
            date="OCT 2, 2023"
          />
          <Content
            img="/2.jpg"
            link="#"
            value="Talking time"
            date="OCT 2, 2023"
          />
          <Content
            img="/3.jpg"
            link="#"
            value="Talking time"
            date="OCT 2, 2023"
          />
          <AiOutlineArrowRight />
        </div>
      </div>
      <div className="container">
        <main>
          <div className="main__left">
            <SmallTitle value="Lifestyle" link="#" />
            <LargeTitle value="SUMMER VOCATION" link="#" />
            <figure>
              <Image
                src="/main-hero.jpeg"
                alt="main"
                className="main-img"
                width={500}
                height={200}
              />
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
          </div>
          <div className="main__right">
            <InfoTitle value="About Me" />
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
              Love like you ll never be hurt, Sing like theres nobody listening.{" "}
              <div className="signature">John James</div>
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
        </main>
      </div>
    </React.Fragment>
  );
}
