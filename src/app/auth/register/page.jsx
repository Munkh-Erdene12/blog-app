"use client";
import React from "react";
import Image from "next/image";
import unique from "unique";
import Input from "@/components/Input";
import { userContext } from "../../../context/User";
export default function Register() {
  const [state, setState] = React.useState({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    confirmpassword: "",
  });
  const ctx = React.useContext(userContext);
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
          <h3 className="title">Register</h3>
          <p className="decg">
            Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur
            adipisicing.
          </p>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Input name="Fisrtname" type="text" label="firstname" />
            </div>
            <div>
              <Input name="Lastname" type="text" label="lastname" />
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <Input name="email" type="text" label="email" />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Input name="password" type="password" label="Password" />
            </div>
            <div>
              <Input
                name="confrim password"
                type="password"
                label="Confrim password"
              />
            </div>
          </div>
          <button type="submut" className="btn" id="btn">
            Log in
          </button>
          <div className="register">
            <p>
              Already a account <a href="/auth/login">Login</a>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
