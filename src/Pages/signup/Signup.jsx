import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authcontext/AuthProvider";
import toast from "react-hot-toast";

const Signup = () => {
  const [signUpError, setSignUpError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUser, googleLogin } = useContext(AuthContext);

  const onSignupSubmit = (data) => {
    const infoUser = {
      displayName: data.fullName,
    };
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;

        // update name
        updateUser(infoUser)
          .then(() => {
            savedUser(user.displayName, user.email);
            navigate("/");
          })
          .catch((err) => console.log(err));
        toast.success("Your Account Created Successfully");
      })
      .catch((err) => {
        console.log(err);
        setSignUpError(err.message);
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast("Google Logined");
      })
      .catch((err) => {
        console.log(err);
        setLoginError(err.message);
      });
  };

  const savedUser = (name, email) => {
    const userInfo = { name, email };

    fetch("https://doctors-server-flame.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className=" my-32">
      <div className="card shrink-0 w-96 h-auto shadow-2xl bg-base-100 mx-auto">
        <form className="card-body" onSubmit={handleSubmit(onSignupSubmit)}>
          <h1 className=" text-center text-xl font-light ">Sign Up</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("fullName", {
                required: "Enter Your Full Name",
              })}
              type="text"
              placeholder="name"
              className="input input-bordered"
            />
            {errors?.fullName && (
              <p className=" text-red-500">{errors.fullName.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", {
                required: "Enter Your Email",
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
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Enter Your Password",
              })}
              type="password"
              placeholder="password"
              className="input input-bordered"
            />
            {errors?.password && (
              <p className=" text-red-500">{errors.password.message}</p>
            )}
          </div>
          {signUpError && <p className=" text-red-500">{signUpError}</p>}
          <div className="form-control mt-4">
            <button className="btn btn-accent" type="submit">
              LOGIN
            </button>
          </div>
          <p className=" text-sm text-center">
            Already have an acount?
            <Link className=" text-secondary" to="/login">
              Please Login
            </Link>
          </p>
          <div className="divider">OR</div>
          <div className="form-control mt-3">
            <button
              className="btn btn-outline"
              type="submit"
              onClick={handleGoogleLogin}
            >
              LOGIN WITH GOOGLE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
