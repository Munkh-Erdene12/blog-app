"use client";
import React, { Fragment } from "react";

export default function Input(props) {
  return (
    <Fragment>
      <div className="inputbox">
        <input type={props.type} name={props.name} id={props.id} required />
        <label htmlFor="myinput">{props.label}</label>
      </div>
    </Fragment>
  );
}
