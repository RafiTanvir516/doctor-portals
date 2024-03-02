import React from "react";
import Banner from "./Banner/Banner";
import InfoCarts from "./info carts/InfoCarts";
import Services from "./Services/Services";
import DentalCare from "./Dental Care/DentalCare";

import Testimonial from "./Testimonial/Testimonial";
import HomeAppointment from "./Appointment/HomeAppointment";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InfoCarts></InfoCarts>
      <Services></Services>
      <DentalCare></DentalCare>
      <HomeAppointment></HomeAppointment>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
