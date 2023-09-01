"use client";
import React from "react";

export default function page() {
  const [state, setState] = React.useState("sainu");
  return <div>{state}</div>;
}
