import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Content(props) {
  return (
    <div className="item-content" onClick={props.onClick}>
      <figure>
        <Image
          src={props.img}
          alt="main content"
          className="item__img"
          width={500}
          height={300}
        />
      </figure>
      <div className="content-text">
        <p>
          <Link href={props.link}>{props.value}</Link>
        </p>
        <div className="meta-date">
          <p className="content-date">{props.date}</p>
        </div>
      </div>
    </div>
  );
}
