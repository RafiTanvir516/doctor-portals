import React from "react";

const TestimonialCard = ({ data }) => {
  const { name, place, description, photo } = data;
  return (
    <div className="card shadow-xl lg:mx-20 md:mx-4">
      <div className="card-body items-center md:mx-4">
        <p>{description}</p>
      </div>
      <div>
        <div className="px-10 pt-10 mb-5 flex">
          <img
            src={photo}
            alt="Icon"
            className="border-4 rounded-full border-primary"
          />
          <div className=" items-center mx-5 mt-2">
            <h1 className=" text-2xl font-light ">{name}</h1>
            <h3 className=" font-normal text-md">{place}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
