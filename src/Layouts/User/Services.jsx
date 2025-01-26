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
    <Link to="/serviceDetails" className="border px-3 py-3 rounded-lg">
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
      <Link to="/user/serviceDetails" className="border-2 rounded-lg font-semibold w-full mt-4 flex justify-center px-3 py-3">View Details</Link>
    </Link>
  );
}

// Main Services Component
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
      <div className="md:flex flex-col xl:flex-row justify-end lg:justify-between items-end xl:items-center">
        <div className="lg:flex">
          <select name="" id="" className="focus-none w-full md:w-auto my-1 me-2 py-3 px-2 border rounded-lg">
            <option value="" selected disabled hidden>Sub-Category</option>
            <option value="Sub-Category1" >Sub-Category1</option>
            <option value="Sub-Category2" >Sub-Category2</option>
            <option value="Sub-Category3" >Sub-Category3</option>
          </select>
          <select name="" id="" className="focus-none w-full md:w-auto my-1 me-2 py-3 px-2 border rounded-lg">
            <option value="" selected disabled hidden>Category</option>
            <option value="Category1" >Category1</option>
            <option value="Category2" >Category2</option>
            <option value="Category3" >Category3</option>

          </select>
          <select name="" id="" className="focus-none w-full md:w-auto my-1 me-2 py-3 px-2 border rounded-lg">
            <option value="" selected disabled hidden>Delivery</option>
            <option value="Delivery1" >Delivery1</option>
            <option value="Delivery2" >Delivery2</option>
            <option value="Delivery3" >Delivery3</option>

          </select>
          <select name="" id="" className="focus-none w-full md:w-auto my-1 me-2 py-3 px-2 border rounded-lg">
            <option value="" selected disabled hidden>Workers</option>
            <option value="Worker1" >Worker1</option>
            <option value="Worker2" >Worker2</option>
            <option value="Worker3" >Worker3</option>

          </select>

        </div>
        <div className="flex border rounded-lg items-center mt-3 xl:mt-0 px-2">
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
