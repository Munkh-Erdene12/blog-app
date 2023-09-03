import React from "react";
import Link from "next/link";
import Image from "next/image";
import Content from "@/components/Content";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

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
      <div
        className="k"
        style={{
          width: "100%",
          height: "100vh",
          background: "red",
        }}
      ></div>
    </React.Fragment>
  );
}
