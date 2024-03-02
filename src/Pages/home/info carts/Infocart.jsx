import React from "react";
import PrivateButton from "../../../Components/PrivateComponent/PrivateButton";

const Infocart = ({ cart }) => {
  const { name, description, icon, bgClass } = cart;
  return (
    <div className={`card card-side ${bgClass} ps-6 py-11`}>
      <figure>
        <img src={icon} alt="cart icon" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Infocart;
