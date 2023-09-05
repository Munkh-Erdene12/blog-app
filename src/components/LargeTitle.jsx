import React from "react";
import Link from "next/link";
export default function LargeTitle(props) {
  return (
    <h2 className={"headline"} style={props.style}>
      <Link href={`/${props.link}`}>{props.value}</Link>
    </h2>
  );
}
