import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllUser = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`https://doctors-server-flame.vercel.app/users`);
      const data = await res.json();
      return data;
    },
  });

  const handleOnAdmin = (user) => {
    alert(`Are you want to make admin ${user.name}`);
    fetch(`https://doctors-server-flame.vercel.app/users/admin/${user._id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success(`${user.name} is Admin`);
        }
        refetch();
      });
  };

  return (
    <div>
      <h1 className=" text-2xl">All Users {users.length}</h1>
      <div className=" mt-8">
        <div className="overflow-x-auto">
          <table className="table bg-base-100">
            <thead className="bg-base-200">
              <tr>
                <th>Serial</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
                <th>Block</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr className="hover" key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role !== "admin" && (
                      <button
                        className=" btn btn-outline"
                        onClick={() => handleOnAdmin(user)}
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                  <td>
                    <button className=" btn btn-outline  btn-error">
                      Block
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

export default AllUser;
