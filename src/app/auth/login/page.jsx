"use client";
import React from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import unique from "unique";
import Input from "../../../components/Input";
// import { userContext } from "../../../context/User";
export default function Contact() {
  const [state, setstate] = React.useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = React.useState(false);
  // const ctx = React.useContext(userContext);
  const submit = () => {
    let updateState = setstate({ ...state });
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!regex.test(state.email)) {
      toast.error("Please use a valid email address", {
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
  };
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
      <ToastContainer />
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
            <Input label="Email" name="email" />
            <Input label="password" name="password" type={showPassword} />
            <div className="forget">
              <span
                className="show__password"
                id="show_password"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <input type="checkbox" />
                show password
              </span>
              <a href="/forget">forget password</a>
            </div>
            <button
              type="submut"
              className="btn"
              id="btn"
              onClick={() => submit()}
            >
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
    </>
  );
}
