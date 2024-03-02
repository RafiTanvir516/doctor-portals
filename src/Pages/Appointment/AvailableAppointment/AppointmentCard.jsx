import React from "react";
import PrivateButton from "../../../Components/PrivateComponent/PrivateButton";

const AppointmentCard = ({ option, SetOption }) => {
  const { name, slots } = option;
  return (
    <div>
      <div className="card shadow-xl mx-6">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-secondary">{name}</h2>
          {slots.length > 0 ? <p>{slots[0]} </p> : <p>Try Another Day</p>}
          <p className=" mb-4">
            {slots.length} {slots.length > 1 ? "spaces" : "space"} available
          </p>
          {slots.length > 0 ? (
            <label
              htmlFor="book_now"
              className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white "
              onClick={() => SetOption(option)}
            >
              Book Appointment
            </label>
          ) : (
            <p>No Slots Available Today</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
