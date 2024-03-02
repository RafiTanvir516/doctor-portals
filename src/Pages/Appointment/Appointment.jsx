import React, { useState } from "react";
import AppointmentBannner from "./appointmentBannner/AppointmentBannner";
import AvailableAppointment from "./AvailableAppointment/AvailableAppointment";

const Appointment = () => {
  const [selected, setSelected] = useState(new Date());

  return (
    <div>
      <AppointmentBannner
        selected={selected}
        setSelected={setSelected}
      ></AppointmentBannner>
      <AvailableAppointment selected={selected}></AvailableAppointment>
    </div>
  );
};

export default Appointment;
