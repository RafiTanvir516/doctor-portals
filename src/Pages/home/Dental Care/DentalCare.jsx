import React from "react";
import treatment from "../../../assets/images/treatment1.jpg";
import PrivateButton from "../../../Components/PrivateComponent/PrivateButton";
const DentalCare = () => {
  return (
    <div className="hero py-7">
      <div className="hero-content flex-col lg:flex-row ">
        <div className=" lg:me-24">
          <img src={treatment} className="shadow-2xl" />
        </div>
        <div className=" lg:w-2/5 mt-5 lg:mt-0">
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrivateButton>Get Started</PrivateButton>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
