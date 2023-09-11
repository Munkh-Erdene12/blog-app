import React from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import CustomImage from "../../components/CustomImage";
import "./style.css";
export default function page() {
  return (
    <div className="contactWrapper">
      <div className="con">
        <div className="wrapper">
          <div className="left">
            <CustomImage img="/inbox-1.webp" />
          </div>
          <div className="right">
            <span className="title">Get in touch</span>
            <div className="inputWrapper">
              <input type="text" placeholder="Name" />
              <span className="icon">
                <FaUser />
              </span>
            </div>
            <div className="inputWrapper">
              <input type="text" placeholder="Email" />
              <span className="icon">
                <MdEmail />
              </span>
            </div>
            <div className="inputWrapper">
              <textarea cols="30" rows="10" placeholder="Message"></textarea>
              <span className="icon"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
