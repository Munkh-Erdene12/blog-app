"use client";
import React from "react";
import Image from "next/image";
import unique from "unique";
import Input from "@/components/Input";
// import { userContext } from "../../../context/User";
export default function Contact() {
  // const ctx = React.useContext(userContext);
  return (
    <form action="">
      <div className="left">
        <Image
          src="/banner.svg"
          alt="banner"
          width={200}
          height={200}
          className="img"
        />
      </div>
      <div className="right">
        <div>
          <h3 className="title">Sign in</h3>
          <p className="decg">
            Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur
            adipisicing.
          </p>
          <Input label="Email" name="email" id={unique()} />
          <Input label="password" name="password" id={unique()} />
          <div className="forget">
            <span className="show__password" id="show_password">
              <input type="checkbox" />
              show password
            </span>
            <a href="/forget">forget password</a>
          </div>
          <button type="submut" className="btn" id="btn">
            Log in
          </button>
          <div className="register">
            <p>
              Dont have a account <a href="/auth/register">Register</a>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
