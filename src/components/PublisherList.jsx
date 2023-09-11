import React from "react";
import Image from "next/image";
export default function PublisherList(props) {
  return (
    <li
      className={props.icon ? "mk" : "mk1"}
      style={props.style}
      onClick={props.onClick}
    >
      {props.value}
      {props.icon}
      {props.children}
    </li>
  );
}
