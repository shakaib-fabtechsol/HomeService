import React, { useEffect, useState } from "react";
import axios from "axios";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { HiPlus } from "react-icons/hi";
import service2 from "../../assets/img/random3.png";

function ServiceBox({ tags = [], image, publish, title, price, description }) {
  useEffect(() => {
    document.title = "Services";
  }, []);

  return (
    <div className="border px-3 py-3 rounded-lg">
      <img src={service2 ?? "N/A"} alt={title} className="rounded-lg w-full" />
      <p
        className={
          publish === 1
            ? "text-[#1dbd15] font-semibold text-end mt-5"
            : "text-[#f50202] font-semibold text-end mt-5"
        }
      >
        {publish === 1 ? "Published" : "Draft"}
      </p>
      <div className="flex justify-between items-center mt-2">
        <Link to="/provider/serviceDetails">
          <h2 className="text-lg font-semibold">{title ?? "N/A"}</h2>
        </Link>
        <p className="mb-0 text-lg font-extrabold">${price ?? "N/A"}</p>
      </div>
      
      <p className="text-sm text-[#535862] mt-2">{description ?? "N/A"}</p>
    </div>
  );
}

function Services() {
  const [services, setServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    const token = localStorage.getItem("token"); // Get token from local storage
    setLoading(true); // Start loading

    axios
      .get("https://homeservice.thefabulousshow.com/api/Deals", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setServices(response.data.deals);
        setLoading(false); // Stop loading after data is received
      })
      .catch((error) => {
        console.error("Error fetching deals:", error);
        setLoading(false); // Stop loading even if there's an error
      });
  }, []);

  const filteredServices = services.filter((service) =>
    service.service_title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="pb-3">
        <h2 className="font-semibold text-3xl myhead">My Deals</h2>
        <p className="myblack">Stay Updated on Your Active Deals</p>
      </div>

      {/* Search Input */}
      <div className="md:flex justify-between items-center">
        <div className="flex border rounded-lg items-center px-2">
          <label htmlFor="search">
            <CiSearch className="me-2 text-xl" />
          </label>
          <input
            id="search"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-2 w-full focus-none"
            placeholder="Search"
          />
        </div>
        <Link
          to="/provider/NewDeals"
          className="bg-blue mt-2 lg:mt-0 px-4 rounded-md py-2 text-white flex justify-center items-center"
        >
          <HiPlus className="text-white text-xl me-1 font-semibold" />
          <span>Create New</span>
        </Link>
      </div>

      {/* Show Loader While Fetching Data */}
      {loading ? (
        <div className="flex justify-center items-center my-10">
          <div className="loader border-4 border-gray-300 border-t-blue-500 rounded-full w-12 h-12 animate-spin"></div>
        </div>
      ) : (
        // Show Data Once Loaded
        <div className="grid mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <ServiceBox
                key={service.id}
                title={service.service_title}
                price={service.flat_rate_price}
                description={service.service_description}
                tags={service.tags}
                image={service.image_url}
                publish={service.publish}
              />
            ))
          ) : (
            <p>No services found</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Services;
