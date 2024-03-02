import React, { useContext } from "react";
import Navbar from "../../Pages/shared/Navbar/Navbar";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/authcontext/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import { MdDashboard } from "react-icons/md";

const DashboardLayout = () => {
  const { userInfo } = useContext(AuthContext);
  const [isAdmin] = useAdmin(userInfo?.email);

  return (
    <div>
      <div>
        <Navbar />
        <label
          htmlFor="dashboard-drawer"
          className="drawer-button lg:hidden text-2xl font-semibold"
        >
          <MdDashboard className=" ms-6 mb-8" />
        </label>
      </div>
      <div className="drawer lg:drawer-open">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content bg-slate-200 p-5 md:p-12">
          <Outlet></Outlet>
        </div>

        <div className="drawer-side">
          <label
            htmlFor="dashboard-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu w-80 min-h-full bg-base-100 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to="/dashboard" className=" text-base rounded-none">
                My Appointment
              </Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link
                    to="/dashboard/all-users"
                    className="text-base rounded-none"
                  >
                    All Users
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/add-doctor"
                    className="text-base rounded-none"
                  >
                    Add Doctor
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/manage-doctor"
                    className="text-base rounded-none"
                  >
                    Manage Doctors
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
