"use client";
import React, { createContext } from "react";
import axios from "axios";
export const userContext = createContext();
const initialState = {
  saving: false,
  logginIn: false,
  error: null,
  errorCode: null,
  token: null,
  id: null,
  expireDate: null,
};
export const UserStore = (props) => {
  const [state, setState] = React.useState(initialState);

  const loginUserSuccess = (token, id, expireDate, refreshToken) => {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("id", id);
    sessionStorage.setItem("expireDate", expireDate);
    sessionStorage.setItem("refreshToken", refreshToken);
    setState({
      ...state,
      logginIn: false,
      error: null,
      errorCode: null,
      token,
      id,
      expireDate,
    });
  };
  const loginUser = (email, password) => {
    setState({ ...state, logginIn: true });
    const data = {
      email,
      password,
    };
    axios
      .get("/api/auth/login", data)
      .then((response) => {
        const token = response.data.token;
        const id = response.data.id;
        const refreshToken = response.data.refreshToken;

        const expiresIn = response.data.expiresIn;
        const expireDate = new Date(new Date().getTime() + expiresIn * 1000);
        loginUserSuccess(token, id, expireDate, refreshToken);
      })
      .catch((err) => {
        setState({
          ...state,
          logginIn: false,
          error: err.message,
          errorCode: err.code,
          token: null,
          id: null,
          expireDate: null,
        });
      });
  };
  const signupUser = (email, firstname, lastname, password) => {
    setState({ ...state, saving: true });
    const data = {
      email,
      firstname,
      lastname,
      password,
    };
    axios
      .post("/api/auth/register", data)
      .then((response) => {
        const token = response.data.token;
        const id = response.data.id;
        const refreshToken = response.data.refreshToken;

        const expiresIn = response.data.expiresIn;
        const expireDate = new Date(new Date().getTime() + expiresIn * 1000);
        loginUserSuccess(token, id, expireDate, refreshToken);
      })
      .catch((err) => {
        setState({
          ...state,
          saving: false,
          token: null,
          id: null,
          error: err.message,
          errorCode: err.code,
        });
      });
  };
  return (
    <userContext.Provider value={{ loginUser, signupUser, state }}>
      {props.children}
    </userContext.Provider>
  );
};
