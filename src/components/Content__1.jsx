import React from "react";
import CustomImage from "../components/CustomImage";
import Link from "next/link";
export default function Content__1(props) {
  return (
    <div className="favorite">
      <div className="img__child">
        <CustomImage img={props.img} alt="save" name="img_1" />
      </div>
      <h3>
        <Link href="#">{props.value}</Link>
        <span>{props.date}</span>
      </h3>
    </div>
  );
}
