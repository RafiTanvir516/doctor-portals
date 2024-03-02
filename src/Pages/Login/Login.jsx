import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authcontext/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [email, setEmail] = useState("");

  // * react hook form state

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // * obj desctructure from auth context
  const { loginUser, passwordReset, googleLogin } = useContext(AuthContext);

  // * data function

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onLoginSubmit = (data) => {
    loginUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("Your Account logined Successfully");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setLoginError(err.message);
      });
  };
  const handleOnPasswordReset = () => {
    handlePasswordReset(email);
  };
  const handlePasswordReset = (email) => {
    passwordReset(email)
      .then(() => {
        toast("Check Your to Reset Password");
      })
      .catch((err) => {
        console.log(err);
        setLoginError(err.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user);
        toast("Google Logined");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setLoginError(err.message);
      });
  };

  return (
    <div className=" my-32">
      <div className="card shrink-0 w-96 h-auto shadow-2xl bg-base-100 mx-auto">
        <form className="card-body" onSubmit={handleSubmit(onLoginSubmit)}>
          <h1 className=" text-center text-xl font-light ">Login</h1>
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
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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
            <label className="label" onClick={handleOnPasswordReset}>
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          {loginError && <p className=" text-red-500">{loginError}</p>}
          <div className="form-control mt-4">
            <button className="btn btn-accent" type="submit">
              LOGIN
            </button>
          </div>
          <p className=" text-sm text-center">
            New to Doctors Portal?
            <Link className=" text-secondary" to="/signup">
              Create new account
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

export default Login;
