import React from "react";
import footerBg from "../../../assets/images/footer-bg.png";

const Footer = () => {
  return (
    <footer
      className="p-20"
      style={{
        background: `url(${footerBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="footer justify-between px-24">
        <nav>
          <header className="footer-title">SERVICES</header>
          <a className="link link-hover">Emergency Checkup</a>
          <a className="link link-hover">Monthly Checkup</a>
          <a className="link link-hover">Weekly Checkup</a>
          <a className="link link-hover">Deep Checkup</a>
        </nav>
        <nav>
          <header className="footer-title">ORAL HEALTH</header>
          <a className="link link-hover">Cavity Filling</a>
          <a className="link link-hover">Teath Whitening</a>
        </nav>
        <nav>
          <header className="footer-title">OUR ADDRESS</header>
          <a className="link link-hover">New York - 101010 Hudson</a>
        </nav>
      </div>
      <p className="mt-20 text-center">Copyright 2024 All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
