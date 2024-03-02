import React, { useContext } from "react";
import useAdmin from "../../hooks/useAdmin";
import { AuthContext } from "../../context/authcontext/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { loading, userInfo } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(userInfo?.email);

  const location = useLocation();

  if (loading || isAdminLoading) {
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
  if (userInfo && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
