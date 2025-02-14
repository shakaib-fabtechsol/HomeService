import React, { useState, useEffect } from "react";
import ServiceBox from "./ServiceBox";
import { CiSearch } from "react-icons/ci";
import axios from "axios";

const ProfileDeal = () => {
  const [formdata, setFormData] = useState({ getDeal: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("id");
        const response = await axios.get(
          `https://homeservice.thefabulousshow.com/api/UserDetails/${userId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        console.log(response.data);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const services = formdata?.getDeal?.length
    ? formdata.getDeal.map((deal) => ({
        image: deal?.image
          ? `https://homeservice.thefabulousshow.com/uploads/${deal.image}`
          : "/default.png",
        title: deal?.service_title || "No title available",
        price: deal?.flat_final_list_price || 0,
        description: deal?.service_description || "No description available",
        tags: deal?.search_tags
          ? deal.search_tags.split(",").map((tag) => ({
              label: tag.trim(),
              type: "primary",
            }))
          : [{ label: "No tags available", type: "secondary" }],
      }))
    : [];

  return (
    <div>
      <div className="mt-4">
        <div className="md:flex justify-between items-center">
          <h2 className="text-2xl font-medium myhead">My Deals</h2>
          <div className="flex border rounded-lg items-center px-2">
            <label htmlFor="search">
              <CiSearch className="me-2 text-xl" />
            </label>
            <input
              id="search"
              type="search"
              className="py-2 w-full focus:outline-none"
              placeholder="Search"
            />
          </div>
        </div>
        {services.length > 0 ? (
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
        ) : (
          <p className="mt-4 text-center text-gray-500">No deals available</p>
        )}
      </div>
    </div>
  );
};

export default ProfileDeal;
