import React from "react";
import Link from "next/link";
export default function SmallTitle(props) {
  return (
    <p className="small-title" style={props.style}>
      <Link style={props.custom} href={`/${props.link}`}>
        {props.value}
      </Link>
    </p>
  );
}
