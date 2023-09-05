"use client";
import React from "react";
import Image from "next/image";
export default function CustomImage(props) {
  return (
    <Image
      src={props.img}
      alt={props.alt}
      className={props.name}
      width={200}
      height={200}
    />
  );
}
