import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const specialities = [
    "Oral Surgery",
    "Teeth Orthodontics",
    "Cosmetic Dentistry",
    "Teeth Cleaning",
    "Cavity Protection",
    "Pediatric Dental",
  ];

  const handleDoctorRegister = (data) => {
    const photo = data.photo[0];

    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("name", data.name);
    formData.append("image", photo);
    formData.append("speciality", data.speciality);

    fetch("https://doctors-server-flame.vercel.app/doctors", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Doctor Added Successfully");
          reset();
        }
      });
  };

  return (
    <div>
      <h1 className="text-2xl">Add a New Doctor</h1>

      <div className="card shrink-0 w-96 h-auto shadow-2xl bg-base-100 mt-6">
        <form
          className="card-body"
          onSubmit={handleSubmit(handleDoctorRegister)}
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", {
                required: "Enter Doctor Full Name",
              })}
              type="text"
              placeholder="name"
              className="input input-bordered"
            />
            {errors?.name && (
              <p className=" text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", {
                required: "Enter Doctor Email",
              })}
              type="email"
              placeholder="email"
              className="input input-bordered"
            />
            {errors?.email && (
              <p className=" text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Speciality</span>
            </label>

            <select
              {...register("speciality", {
                required: "Enter Doctor's speciality",
              })}
              className="select select-bordered w-full  mb-5"
            >
              {specialities?.map((spec, i) => (
                <option value={spec} key={i}>
                  {spec}
                </option>
              ))}
            </select>
            {errors?.email && (
              <p className=" text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Add Photo</span>
            </label>
            <input
              {...register("photo", {
                required: "Enter Doctor Photo",
              })}
              type="file"
              className="file-input file-input-bordered file-input-success w-full max-w-xs"
            />
            {errors?.photo && (
              <p className=" text-red-500">{errors.photo.message}</p>
            )}
          </div>

          <div className="form-control mt-4">
            <button className="btn btn-accent" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
