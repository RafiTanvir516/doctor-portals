import React from "react";
import Navbar from "../Pages/shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
