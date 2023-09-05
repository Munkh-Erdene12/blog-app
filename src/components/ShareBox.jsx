"use client";
import React from "react";
export default function ShareBox(props) {
  return (
    <div
      className={
        props.style ? "shareBox" : "share-button" ? "share-button" : ""
      }
    >
      <div className="social-icons">
        <ul>{props.children}</ul>
      </div>
    </div>
  );
}
