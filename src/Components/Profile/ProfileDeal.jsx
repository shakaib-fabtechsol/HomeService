import React, { useState, useEffect ,useMemo} from "react";
import ServiceBox from "./ServiceBox";
import { CiSearch } from "react-icons/ci";
import Loader from "../../Components/MUI/Loader";
import axios from "axios";

const ProfileDeal = () => {
  const [formdata, setFormData] = useState({ getDeal: [] });
  const [isApiLoaded, setIsApiLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredServices, setFilteredServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("id");
        const response = await axios.get(
          `https://backend.homeprodeals.com/api/UserDetails/${userId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setFormData(response.data);
        setIsApiLoaded(true);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const truncateDescription = (desc, wordLimit = 20) => {
    if (!desc) return "No description available";
    const words = desc.split(" ");
    return words.length <= wordLimit
      ? desc
      : words.slice(0, wordLimit).join(" ") + "...";
  };

  const services = useMemo(() => {
    return formdata?.getDeal?.map((deal) => ({
      image: deal?.image
      ? `https://backend.homeprodeals.com/uploads/${deal.image}`
      : "/default.png",
      title: deal?.service_title || "No title available",
      price: deal?.flat_final_list_price || 0,
      description: truncateDescription(deal?.service_description, 5),
      category: deal?.service_category || "No category available",
    }));
  }, [formdata]);


    useEffect(() => {
      const filteredServices = services.filter((service) =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredServices(filteredServices);
    }, [searchQuery, services]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      {loading || !isApiLoaded ? (
        <Loader />
      ) : (
        <div className="h-screen">
          <div className="mt-4">
            <div className="md:flex justify-between items-center">
              <h2 className="text-2xl font-medium myhead">Our Deals</h2>
              <div className="flex border rounded-lg items-center px-2">
                <label htmlFor="search">
                  <CiSearch className="me-2 text-xl" />
                </label>
                <input
                  id="search"
                  type="search"
                  className="py-2 w-full focus:outline-none"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
            </div>
            {filteredServices.length > 0 ? (
              <div className="grid mt-4 grid-cols-1 md:grid-cols-3 gap-4">
                {filteredServices.slice(0, 4).map((service, index) => (
                  <div key={index} className="h-80">
                    <ServiceBox
                      image={service.image}
                      title={service.title}
                      price={service.price}
                      description={service.description}
                      category={service.category}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-4 text-center text-gray-500">
                No deals available
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileDeal;