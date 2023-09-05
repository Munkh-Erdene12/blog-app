"use client";
import React from "react";
import ShareIcon from "../components/ShareIcon";
import { AiOutlineHeart } from "react-icons/ai";
export default function Action() {
  return (
    <div className="action-pm flex">
      <div className="action-font flex1 ">
        <ShareIcon
          icon={<AiOutlineHeart />}
          main={{ color: "red" }}
          style={{
            marginRight: "5px",
          }}
        />
        likes
      </div>
      <div className="action-font">5 MINS READ</div>
      <div className="action-font">676 views</div>
    </div>
  );
}
