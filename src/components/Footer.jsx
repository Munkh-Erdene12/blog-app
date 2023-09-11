import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="lm">
        <span>Blog app</span>
        <p></p>
      </div>
      <div className="lm">
        <span className="ml">Customers</span>
        <ul>
          <li>buyer</li>
          <li>Supplier </li>
        </ul>
      </div>
      <div className="lm">
        <span className="ml">Company</span>
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>careers</li>
        </ul>
      </div>
      <div className="lm">
        <span className="ml">Further Information</span>
        <ul>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="lm">
        <span className="ml">Social Media</span>
      </div>
    </footer>
  );
}
