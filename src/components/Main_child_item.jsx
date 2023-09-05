import React from "react";
import CustomImage from "./CustomImage";
import SmallTitle from "./SmallTitle";
import LargeTitle from "./LargeTitle";
import Desc from "./Desc";
import Border from "./Border";
import Action from "./Action";
export default function Main_child_item(props) {
  return (
    <div className="main_child_item">
      <div className="box">
        <span>10</span>
        <span>SEP</span>
      </div>
      <div className="item">
        <CustomImage img={props.img} name="img" alt="main-img" />
        <SmallTitle value={props.smallTitle} href="#" />
        <LargeTitle
          value={props.LargeTitle}
          href="#"
          style={{ fontSize: "23px" }}
        />
        <Desc />
        <Border />
        <Action />
      </div>
    </div>
  );
}
