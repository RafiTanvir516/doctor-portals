import React from "react";
import clock from "../../../assets/icon/clock.svg";
import marker from "../../../assets/icon/location.svg";
import phone from "../../../assets/icon/phone.svg";
import Infocart from "./Infocart";

const InfoCarts = () => {
  const cartData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Open 9.00 a.m to 5.00 pm everyday",
      icon: clock,
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
    {
      id: 2,
      name: "Our Locations",
      description: "Open 9.00 a.m to 5.00 pm everyday",
      icon: marker,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      name: "Contact Us",
      description: "Open 9.00 a.m to 5.00 pm everyday",
      icon: phone,
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
  ];

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:py-20 px-6 gap-6">
      {cartData.map((cart) => (
        <Infocart key={cart.id} cart={cart}></Infocart>
      ))}
    </div>
  );
};

export default InfoCarts;
