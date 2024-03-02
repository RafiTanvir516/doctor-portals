import React, { useState } from "react";
import chair from "../../../assets/images/chair.jpg";
import bannerBg from "../../../assets/images/Landing.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const AppointmentBannner = ({ setSelected, selected }) => {
  return (
    <div
      className="hero px-3 lg:px-20 py-10"
      style={{
        background: `url(${bannerBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse lg:py-24 py-12 max-w-[90rem] gap-x-32 ">
        <img src={chair} className=" lg:w-full rounded-lg shadow-2xl" />
        <div className=" sm:mt-10 lg:mt-0  shadow-2xl rounded lg:w-full ">
          <DayPicker mode="single" selected={selected} onSelect={setSelected} />
          {selected ? (
            <div>
              <p>You picked {format(selected, "PP")}.</p>
            </div>
          ) : (
            <p>pick a data</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentBannner;
