import { useQuery } from "@tanstack/react-query";
import React from "react";

const ManageDoctor = () => {
  const { data: doctors = [] } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch(
        `https://doctors-server-flame.vercel.app/doctors`
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h1 className=" text-2xl">Manage Doctors</h1>
      <div className=" mt-8">
        <div className="overflow-x-auto">
          <table className="table bg-base-100">
            <thead className="bg-base-200">
              <tr>
                <th>Serial</th>
                <th>Name</th>
                <th>Email</th>
                <th>Speciality</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor, i) => (
                <tr className="hover" key={doctor._id}>
                  <th>{i + 1}</th>
                  <td>{doctor.name}</td>
                  <td>{doctor.email}</td>
                  <td>{doctor.speciality}</td>
                  <td>
                    <div className="w-10 h-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={`data:image/png;base64,${doctor.image}`}
                      />
                    </div>
                  </td>
                  <td>
                    <button className=" btn btn-outline  btn-error">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageDoctor;
