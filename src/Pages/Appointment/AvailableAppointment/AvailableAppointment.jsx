import React, { useEffect, useState } from "react";

import AppointmentCard from "./AppointmentCard";
import BookNow from "./BookNow";
import { format } from "date-fns";
import { useQuery } from "@tanstack/react-query";

const AvailableAppointment = ({ selected }) => {
  const [option, SetOption] = useState({});
  const date = format(selected, "PP");

  // useEffect(() => {
  //   fetch("AppointmentOptions.json")
  //     .then((res) => res.json())
  //     .then((data) => SetOptions(data));
  // }, []);

  // * tenstack query

  const { data: options = [], refetch } = useQuery({
    queryKey: ["availableappointments", date],
    queryFn: async () => {
      const res = await fetch(
        `https://doctors-server-flame.vercel.app/availableappointments?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className=" py-10">
      <div className="text-center">
        <h1 className=" text-secondary font-semibold text-3xl">
          Available Services on {date}
        </h1>
        <h3 className=" text-accent font-light ">Please select a service.</h3>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:py-20 px-6 gap-8">
        {options.map((opt) => (
          <AppointmentCard
            key={opt._id}
            option={opt}
            SetOption={SetOption}
          ></AppointmentCard>
        ))}
        {option && (
          <BookNow
            option={option}
            selected={selected}
            SetOption={SetOption}
            refetch={refetch}
          ></BookNow>
        )}
      </div>
    </div>
  );
};

export default AvailableAppointment;
