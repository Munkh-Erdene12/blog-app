"use client";
import React, { createContext, useState } from "react";

export const MainContext = createContext();

const initialState = {
  header: false,
};

const MainStore = (props) => {
  const [state, setState] = useState(initialState);

  return (
    <MainContext.Provider value={{ state }}>
      {props.children}
    </MainContext.Provider>
  );
};

export default MainStore;
