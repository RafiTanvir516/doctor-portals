import React, { useContext } from "react";
import { AuthContext } from "../../context/authcontext/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const { userInfo } = useContext(AuthContext);

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", userInfo?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://doctors-server-flame.vercel.app/bookings?email=${userInfo?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h1 className=" text-2xl">My Appointment {bookings.length}</h1>
      <div className=" mt-8">
        <div className="overflow-x-auto">
          <table className="table bg-base-100">
            <thead className=" bg-base-200">
              <tr>
                <th>Serial</th>
                <th>Name</th>
                <th>Email</th>
                <th>Service</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, i) => (
                <tr className="hover" key={booking._id}>
                  <th>{i + 1}</th>
                  <td>{booking.patient}</td>
                  <td>{booking.email}</td>
                  <td>{booking.treatment}</td>
                  <td>{booking.slot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
