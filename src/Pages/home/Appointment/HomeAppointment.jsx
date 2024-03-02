import React from "react";
import doctor from "../../../assets/images/doctor-small.png";
import appointmentBg from "../../../assets/images/bg-blue.png";
import PrivateButton from "../../../Components/PrivateComponent/PrivateButton";

const HomeAppointment = () => {
  return (
    <div
      className="hero  mt-44 mb-6"
      style={{
        background: `url(${appointmentBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-content flex-col lg:flex-row p-0">
        <div>
          <img src={doctor} className=" -mt-28 max-w-full" />
        </div>
        <div className=" lg:w-2/5 text-white p-4">
          <h3 className=" text-primary font-semibold text-lg my-4">
            Appointment
          </h3>
          <h1 className="text-4xl font-bold">Make an appointment Today</h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrivateButton>Get Started </PrivateButton>
        </div>
      </div>
    </div>
  );
};

export default HomeAppointment;
