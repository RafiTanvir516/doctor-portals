import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/home/Home";
import Appointment from "../../Pages/Appointment/Appointment";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/dashboardLayout/DashboardLayout";
import ErrorPage from "../../Pages/404page/ErrorPage";

import AdminRoute from "../adminRoute/AdminRoute";
import AddDoctor from "../../Pages/Dashboard/add-doctor/AddDoctor";
import AllUser from "../../Pages/Dashboard/AllUser/AllUser";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import ManageDoctor from "../../Pages/Dashboard/ManageDoctor/ManageDoctor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/all-users",
        element: (
          <AdminRoute>
            <AllUser />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add-doctor",
        element: (
          <AdminRoute>
            <AddDoctor />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manage-doctor",
        element: (
          <AdminRoute>
            <ManageDoctor />
          </AdminRoute>
        ),
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
