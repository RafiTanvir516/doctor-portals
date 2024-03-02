import React, { useContext } from "react";
import { AuthContext } from "../../context/authcontext/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { loading, userInfo } = useContext(AuthContext);

  const location = useLocation();
  if (userInfo) {
    return children;
  }

  if (loading) {
    return (
      <div className=" flex h-screen justify-center items-center">
        <div className="flex gap-2">
          <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600" />
          <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600" />
          <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600" />
        </div>
      </div>
    );
  }
  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
