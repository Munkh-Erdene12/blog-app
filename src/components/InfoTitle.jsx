import React from "react";

export default function InfoTitle(props) {
  return (
    <h3 className="info-title" style={props.style}>
      <span>{props.value}</span>
    </h3>
  );
}
