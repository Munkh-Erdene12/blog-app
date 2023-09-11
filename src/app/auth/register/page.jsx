"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Import the useRouter hook

import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Input from "../../../components/Input";
import { userContext } from "../../../context/User";

export default function Register() {
  const router = useRouter();
  const [state, setState] = React.useState({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    confirmPassword: "",
  });

  const onchange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    if (state.confirmPassword !== state.password) {
      toast.error("Нууц үг таарахгүй байна", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    ctx.signupUser(
      state.email,
      state.firstname,
      state.lastname,
      state.password
    );
    router.push("/");
  };

  const ctx = React.useContext(userContext);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <form onSubmit={submit} action="">
        {" "}
        {/* Added onSubmit handler */}
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
                <Input
                  name="firstname"
                  type="text"
                  label="firstname"
                  onChange={onchange}
                />
              </div>
              <div>
                <Input
                  name="lastname"
                  type="text"
                  label="lastname"
                  onChange={onchange}
                />
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <Input
                name="email"
                type="text"
                label="email"
                onChange={onchange}
              />
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <Input
                  name="password"
                  type="password"
                  label="Password"
                  onChange={onchange}
                />
              </div>
              <div>
                <Input
                  name="confirmPassword"
                  type="password"
                  label="Confirm password"
                  onChange={onchange}
                />
              </div>
            </div>
            <button type="submit" className="btn" id="btn">
              Register
            </button>
            <div className="register">
              <p>
                Already have an account? <a href="/auth/login">Login</a>
              </p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
