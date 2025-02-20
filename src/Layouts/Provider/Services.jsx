import React, { useEffect, useState } from "react";
import axios from "axios";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { HiPlus } from "react-icons/hi";
import service2 from "../../assets/img/service2.png";
import Loader from "../../Components/MUI/Loader";

function ServiceBox({
  tags = [],
  image,
  publish,
  title,
  price,
  description,
  dealid,
}) {
  useEffect(() => {
    document.title = "Services";
  }, []);
  const imageUrl = image
    ? `https://homeservice.thefabulousshow.com/uploads/${image}`
    : null;

  const defaultimg = "/vite.svg";

  const imageToShow = imageUrl || defaultimg;

  {
    console.log("publish", publish);
  }

  const truncateDescription = (desc, wordLimit = 20) => {
    if (!desc) return "No description available";
    const words = desc.split(" ");
    return words.length <= wordLimit
      ? desc
      : words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <div className="border px-3 py-3 rounded-lg">
      <div className="rounded-lg">
        <img
          src={imageToShow}
          alt="Service Image"
          className="rounded-lg w-full h-40 object-cover"
        />
      </div>

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
        <Link to="/provider/serviceDetails" state={{ dealid }}>
          <h2 className="text-lg font-semibold">{title ?? "N/A"}</h2>
        </Link>
        <p className="mb-0 text-lg font-extrabold">{price ?? "N/A"}</p>
      </div>

      <p className="text-sm text-[#535862] mt-2">
        {truncateDescription(description, 8) ?? "N/A"}
      </p>
      <p className="text-sm text-[#535862] mt-4">
        {tags && tags.length > 0
          ? tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="bg-[#E7F4FB] text-[#0F91D2] px-4 py-2 rounded-full text-sm me-2"
              >
                {tag}
              </span>
            ))
          : "No tags available"}
      </p>
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
        console.log("imagesResponse", response.data.deals);
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
    <div className="pmain">
      <div className="pb-3 navv">
        <h2 className="font-semibold text-3xl myhead">My Deals</h2>
        <p className="myblack">Stay Updated on Your Active Deals</p>
      </div>

      <div className="btm">
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
        {console.log("value", filteredServices)}

        {loading ? (
          <Loader />
        ) : (
          <div className="grid mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <ServiceBox
                  key={service.id}
                  title={service.service_title}
                  price={
                    service.pricing_model === "Flat"
                      ? service.flat_rate_price
                      : service?.pricing_model == "Hourly"
                      ? service.hourly_final_list_price
                      : service.price1
                  }
                  description={service.service_description}
                  tags={
                    service.search_tags ? service.search_tags.split(",") : []
                  }
                  image={service.image}
                  publish={service.publish}
                  dealid={service.id}
                />
              ))
            ) : (
              <p>No services found</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Services;
