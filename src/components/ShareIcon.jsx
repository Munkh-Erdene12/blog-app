"use client";
import React from "react";
import Link from "next/link";

export default function ShareIcon(props) {
  return (
    <li style={props.style}>
      <Link href="#">{props.icon}</Link>
    </li>
  );
}
