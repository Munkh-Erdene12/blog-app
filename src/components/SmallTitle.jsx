import React from "react";
import Link from "next/link";
export default function SmallTitle(props) {
  return (
    <p className="small-title">
      <Link href={`/${props.link}`}>{props.value}</Link>
    </p>
  );
}
