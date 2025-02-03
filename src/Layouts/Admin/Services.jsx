import React, { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router";
import { HiPlus } from "react-icons/hi";
import service1 from "../../assets/img/service1.png";
import service2 from "../../assets/img/service2.png";
import service3 from "../../assets/img/service3.png";

// Reusable Service Box Component
function ServiceBox({ image, title, price, description, tags }) {
  useEffect(() => {
    document.title = "Services";
  }, []);
  return (
    <Link to="/admin/serviceDetails" className="border px-3 py-3 rounded-lg">
      <img src={image} alt={title} className="rounded-lg w-full" />
      <div className="flex justify-between items-center mt-5">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="mb-0 text-2xl font-bold">${price}</p>
      </div>
      <p className="text-sm">{description}</p>
      <div className="flex mt-7">
        {tags.map((tag, index) => (
          <p
            key={index}
            className={`px-3 py-1 font-semibold text-sm rounded-full me-2 ${
              tag.type === "primary"
                ? "text-[#0F91D2] bg-[#E7F4FB]"
                : "text-[#343434] bg-[#EBEBEB]"
            }`}
          >
            {tag.label}
          </p>
        ))}
      </div>
    </Link>
  );
}

function Services() {
  const services = [
    {
      image: service1,
      title: "Cleaning Service",
      price: 200,
      description:
        "Professional cleaning services for residential and commercial spaces.",
      tags: [
        { label: "Cleaning", type: "primary" },
        { label: "Residential", type: "secondary" },
      ],
    },
    {
      image: service2,
      title: "Plumbing Service",
      price: 150,
      description:
        "Expert plumbing solutions for your home and business needs.",
      tags: [
        { label: "Plumbing", type: "primary" },
        { label: "Commercial", type: "secondary" },
      ],
    },
    {
      image: service3,
      title: "Electrical Service",
      price: 300,
      description:
        "Reliable electrical services for installations and repairs.",
      tags: [
        { label: "Electrical", type: "primary" },
        { label: "Industrial", type: "secondary" },
      ],
    },
  ];

  return (
    <div>
      <div className="pb-3">
        <h2 className="font-bold text-3xl myhead">My Deals</h2>
        <p className="myblack">Stay Updated on Your Active Deals</p>
      </div>
      <div className="md:flex justify-between items-center">
        <div className="flex border rounded-lg items-center px-2">
          <label htmlFor="search">
            <CiSearch className="me-2 text-xl" />
          </label>
          <input
            id="search"
            type="search"
            className="py-2 w-full focus-none"
            placeholder="Search"
          />
        </div>
        <Link
          to="/admin/NewDeals"
          className="bg-blue mt-2 lg:mt-0 px-4 rounded-md py-2 text-white flex justify-center items-center"
        >
          <HiPlus className="text-white text-xl me-1 font-semibold" />
          <span>Create New</span>
        </Link>
      </div>
      <div className="grid mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <ServiceBox
            key={index}
            image={service.image}
            title={service.title}
            price={service.price}
            description={service.description}
            tags={service.tags}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
