import React from "react";
import chair from "../../../assets/images/chair.jpg";
import bannerBg from "../../../assets/images/Landing.png";
import PrivateButton from "../../../Components/PrivateComponent/PrivateButton";

const Banner = () => {
  return (
    <div
      className="hero px-3 lg:px-20 py-10"
      style={{
        background: `url(${bannerBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse lg:py-24 py-12 max-w-[90rem]">
        <img src={chair} className=" lg:w-1/2 rounded-lg shadow-2xl" />
        <div className=" mt-10 ">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <PrivateButton>Get Started</PrivateButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
