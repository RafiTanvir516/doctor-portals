import React from "react";
import people from "../../../assets/images/people-1.png";
import TestimonialCard from "./TestimonialCard";
import quote from "../../../assets/icon/cotation.png";

const Testimonial = () => {
  const testimonialData = [
    {
      id: 1,
      name: "Winson Herry",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      photo: people,
      place: "California",
    },
    {
      id: 2,
      name: "John Wick",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      photo: people,
      place: "California",
    },
    {
      id: 3,
      name: "Evren Gaven",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      photo: people,
      place: "California",
    },
  ];

  return (
    <div className=" mt-20 p-6">
      <div className=" flex justify-between mx-12 my-12 md:my-0">
        <div>
          <h1 className=" text-primary font-semibold ">Testimonial</h1>
          <h3 className=" text-accent font-light  text-3xl">
            What Our Patients Says
          </h3>
        </div>
        <div>
          <img src={quote} alt="quote" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:py-20 mx-10 gap-8">
        {testimonialData.map((data) => (
          <TestimonialCard key={data.id} data={data}></TestimonialCard>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
