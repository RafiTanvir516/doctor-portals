import React from "react";
import fluoride from "../../../assets/icon/fluoride1.png";
import cavity from "../../../assets/icon/cavity.png";
import teeth from "../../../assets/icon/whitening.png";
import Service from "./Service";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      icon: fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      icon: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      icon: teeth,
    },
  ];

  return (
    <div>
      <div className="text-center">
        <h1 className=" text-primary font-semibold ">OUR SERVICES</h1>
        <h3 className=" text-accent font-light  text-4xl">
          Services We Provide
        </h3>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:py-20 px-6 gap-8">
        {serviceData.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
