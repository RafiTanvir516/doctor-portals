import { format } from "date-fns";
import React, { useContext, useState } from "react";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import { AuthContext } from "../../../context/authcontext/AuthProvider";
import toast from "react-hot-toast";

const BookNow = ({ option, selected, SetOption, refetch }) => {
  const [value, setValue] = useState();
  const { userInfo } = useContext(AuthContext);

  const { name, slots } = option;
  const date = format(selected, "PP");

  const handleAppointment = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const fullName = form.fullName.value;
    const number = form.number.value;
    const email = form.email.value;
    const appointmentDetails = {
      appointmentDate: date,
      treatment: name,
      slot,
      patient: fullName,
      number,
      email,
    };
    fetch("https://doctors-server-flame.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointmentDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          SetOption(null);
          refetch();
          toast.success("Your appointment is successfully done");
        } else {
          toast.error(data.message);
          SetOption(null);
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="book_now" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <div>
            <h3 className=" font-medium text-lg">{name}</h3>
            <div className="modal-action">
              <label
                htmlFor="book_now"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-accent text-[#8391AD]"
              >
                ✕
              </label>
            </div>
          </div>

          <form onSubmit={handleAppointment}>
            <input
              type="text"
              className="input input-bordered w-full bg-accent mb-5"
              value={date}
              disabled
            />
            <select className="select select-bordered w-full  mb-5" name="slot">
              {slots?.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full mb-5"
              name="fullName"
              defaultValue={userInfo?.displayName}
            />

            <PhoneInputWithCountrySelect
              placeholder="Enter phone number"
              value={value}
              className="input input-bordered w-full mb-5"
              name="number"
              onChange={setValue}
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full mb-5"
              name="email"
              defaultValue={userInfo?.email}
              readOnly
            />
            <input
              type="submit"
              value="Submit"
              className="btn w-full bg-accent text-white mb-5"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
