"use client";
import React, { Fragment } from "react";

export default function Input(props) {
  return (
    <Fragment>
      <div className="inputbox">
        <input
          type={props.type ? "password" : "text"}
          name={props.name}
          id="1243"
          required
          onChange={(e) => props.onChange(e)}
        />
        <label htmlFor="myinput">{props.label}</label>
      </div>
    </Fragment>
  );
}
