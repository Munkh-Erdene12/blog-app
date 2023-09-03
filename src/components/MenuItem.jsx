import React from "react";

export default function MenuItem({ icon, children }) {
  return (
    <div className="menu-item">
      {icon}
      {children}
    </div>
  );
}
