import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaRegTrashCan } from "react-icons/fa6";
import { FaPencilAlt, FaRegCalendarAlt } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import servicedet from "../../assets/img/service-det.png";
import { Box, Modal, Tab, Tabs, TabScrollButton } from "@mui/material";
import PropTypes from "prop-types";
import {
  IoChatbubbleEllipsesOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import provider from "../../assets/img/provider.png";
import { BiMessageAltDetail, BiMessageSquareDetail } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { TbMailDown } from "react-icons/tb";
import { PiChats } from "react-icons/pi";
import Basic from "../../Components/Plan/Basic";
import Standard from "../../Components/Plan/Standard";
import Premium from "../../Components/Plan/Premium";
import axios from "axios"; // Import axios
import Swal from "sweetalert2";
import Loader from "../../Components/MUI/Loader";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function ServiceDetail() {
  useEffect(() => {
    document.title = "Service Details";
  }, []);

  const [value, setValue] = React.useState(0);
  const [serviceDetails, setServiceDetails] = useState(null);
  const [pricingModel, setPricingModel] = useState("");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const location = useLocation();
  const dealid = location.state?.dealid || "";
  const [provider, setProviderData] = useState({});
  const [contactopen, setcontactOpen] = React.useState(false);
  const handlecontactOpen = () => setcontactOpen(true);
  const handlecontactClose = () => setcontactOpen(false);

  const modalContacts = [
    { path: "#", Icon: <FiPhone />, title: "Call Pro: (785) 712-6532" },
    {
      path: "#",
      Icon: <BiMessageSquareDetail />,
      title: "Text Pro: (708) 813-8989",
    },
    {
      path: "#",
      Icon: <BiMessageAltDetail />,
      title: "Instant Chat",
    },
    { path: "#", Icon: <TbMailDown />, title: "Email Pro" },
    { path: "#", Icon: <PiChats />, title: "Direct Form" },
    {
      path: "#",
      Icon: <IoLocationOutline />,
      title: "Get Directions",
    },
  ];

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // Fetch service details using axios when the component mounts
  useEffect(() => {
    if (dealid) {
      const token = localStorage.getItem("token");
      setLoading(true);

      if (token) {
        axios
          .get(`https://backend.homeprodeals.com/api/Deal/${dealid}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            const model = serviceDetails?.pricing_model || "Hourly";
            setPricingModel(model);
            setServiceDetails(response.data.deal);
            setLoading(false);
          })
          .catch((error) => {
            setLoading(false);
            console.error("Error fetching service details:", error);
          });
      }
    }
  }, [dealid]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("id");

        if (!token || !userId) return;

        const response = await axios.get(
          `https://backend.homeprodeals.com/api/UserDetails/${userId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setProviderData(response.data?.businessProfile[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const imagePath = provider?.business_logo;
  const imageUrl = imagePath
    ? `https://backend.homeprodeals.com/uploads/${imagePath}`
    : "/default.png";
  const regularHours =
    provider && provider.length > 0
      ? JSON.parse(provider.regular_hour || "[]")
      : [];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = days[new Date().getDay()];
  const currentDayData = regularHours.find(
    (item) => item.day_name === currentDay
  );

  const handleDelete = (dealId) => {
    if (!dealId) {
      console.error("Deal ID is missing!");
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found, cannot delete deal.");
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      showLoaderOnConfirm: true, // Shows loader on confirm button
      allowOutsideClick: false, // Prevents closing on outside click
      preConfirm: () => {
        return axios
          .get(
            `https://backend.homeprodeals.com/api/DeleteDeal/${dealId}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
          .then(() => {
            navigate("/provider/services"); // Redirect after success
          })
          .catch((error) => {
            Swal.fire("Error!", "Failed to delete the deal.", "error");
          });
      },
    });
  };

  if (loading) {
    return <Loader />; // Show loading while fetching data
  }

  if (!serviceDetails) {
    return <div>No service details available.</div>;
  }

  const imagePath1 = serviceDetails[0]?.image;
  const imageUrl1 = imagePath1
    ? `https://backend.homeprodeals.com/uploads/${imagePath1}`
    : "/default.png";
  return (
    <div className="pmain">
      <div className="navv">
        <div className="flex items-center">
          <Link to="/provider/services">
            <FaArrowLeft className="me-4 text-xl" />
          </Link>
          <h2 className="text-2xl font-semibold">Service Details</h2>
        </div>
        <p className="text-[#535862] mt-4 ms-8">
          Stay Updated on Your Active Deals.
        </p>
      </div>
      <div className="btm">
        <div className="flex flex-col lg:flex-row justify-between ">
          <h2 className="text-xl lg:text-[23px] myhead font-semibold lg:me-2">
            {serviceDetails[0]?.service_title || "N/A"}
          </h2>
          <div className="flex items-center justify-end mt-3 lg:mt-0">
            <button
              className="bg-[#FA2841] px-3 py-3 text-[#fff] rounded-md me-2"
              onClick={() => handleDelete(dealid)}
            >
              <FaRegTrashCan />
            </button>
            <Link
              to={`/provider/NewDeals/${dealid}`}
              className="bg-[#0F91D2] px-3 py-3 text-[#fff] rounded-md"
            >
              <FaPencilAlt />
            </Link>
          </div>
        </div>
        <div className="grid mt-4 grid-cols-1 md:grid-cols-12 gap-4">
          <div className="col-span-12 xl:col-span-8">
            <div className="">
              <div className="flex flex-wrap items-center">
                <img
                  onClick={() => navigate("/provider/ProfileDetails")}
                  src={imageUrl}
                  alt=""
                  className="me-2 my-2 rounded-lg object-cover w-[100px] h-[100px] cursor-pointer"
                  style={{
                    aspectRatio: "1/1",
                  }}
                />
                <div className="my-2">
                  <div className="flex">
                    <Link to="/provider/ProfileDetails">
                      <p className="font-semibold myhead me-2">
                        {provider?.business_name}
                      </p>
                    </Link>
                    <div className="flex">
                      <IoIosStar className="me-2 text-[#F8C600]" />
                      <p className="myblack text-sm">
                        <span className="myhead font-semibold">4.9</span>(457)
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap mt-2">
                    <p className="myblack pe-3 me-3 border-e">House Cleaning</p>
                    <div className="flex items-center">
                      <IoLocationOutline className="me-2 myblack" />
                      <p className="myblack ">{provider?.user?.location}</p>
                    </div>
                  </div>
                  <div className="flex mt-2 items-center">
                    <div className="flex me-2">
                      <FaRegCalendarAlt className="me-2" />
                      <p className="text-sm myblack">
                        {currentDayData ? (
                          <>{currentDayData.day_name}:&nbsp;</>
                        ) : (
                          "No data available for today."
                        )}
                      </p>

                      <p className="text-sm text-[#34A853] font-[300]">
                        {currentDayData?.day_status === "open"
                          ? "Available"
                          : "Unavailable"}
                      </p>
                      <p className="text-sm ml-2 lg:ml-10 myblack">
                        {currentDayData?.day_status === "open" ? (
                          <>
                            Closed {currentDayData.regular_hour[0].end_time}{" "}
                            {currentDayData.regular_hour[0].end_time.includes(
                              "AM"
                            ) ||
                            currentDayData.regular_hour[0].end_time.includes(
                              "PM"
                            )
                              ? ""
                              : currentDayData.regular_hour[0].end_time >= 12
                              ? "PM"
                              : "AM"}
                          </>
                        ) : (
                          "Closed"
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Modal
                open={contactopen}
                onClose={handlecontactClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ m: 2 }}
              >
                <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] outline-none">
                  <div className="bg-white rounded-[12px] p-4 max-h-[calc(100dvh-200px)] overflow-y-auto scroll-x-hidden">
                    <p className="text-lg font-semibold">Contact Pro</p>
                    <div className="flex flex-col gap-3 mt-4">
                      {modalContacts.map((contact, index) => (
                        <Link
                          key={index}
                          className="bg-[#FB8803] text-white flex items-center justify-center gap-2 p-3 rounded-[8px] text-sm font-medium"
                          to={contact.path}
                        >
                          <span className="text-[24px]">{contact.Icon}</span>
                          <span>{contact.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </Modal>
            </div>

            <img
              src={imageUrl1}
              alt=""
              className="rounded-xl object-cover w-[1000px] h-[350px]"
            />
          </div>
          <div className="col-span-12 xl:col-span-4">
            <div className="flex flex-col h-full gap-5">
              <div className="py-5 bg-[#FAFAFA] h-full border rounded-lg lg:px-6 px-4">
                <Box sx={{ width: "100%" }}>
                  <Box
                    sx={{
                      border: "1px solid #E9EAEB",
                      borderRadius: "12px",
                      overflow: "hidden",
                    }}
                  >
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="basic tabs example"
                      variant="scrollable"
                      TabIndicatorProps={{ sx: { display: "none" } }}
                      sx={{
                        backgroundColor: "#ffffff",
                        "& .MuiTab-root": {
                          color: "#535862",
                          textTransform: "capitalize",
                          fontFamily: "inter",
                        },
                        "& .Mui-selected": {
                          color: "#181D27",
                          fontWeight: "700",
                        },
                      }}
                    >
                      <Tab label="Basic" {...a11yProps(0)} />
                      {pricingModel !== "Flat" && pricingModel !== "Hourly" && (
                        <Tab label="Standard" {...a11yProps(1)} />
                      )}
                      {pricingModel !== "Flat" && pricingModel !== "Hourly" && (
                        <Tab label="Premium" {...a11yProps(2)} />
                      )}
                    </Tabs>
                  </Box>
                  <CustomTabPanel value={value} index={0}>
                    <div className="flex justify-between">
                      <h2 className="text-2xl font-medium myhead">
                        {serviceDetails[0]?.pricing_model}
                      </h2>
                      <p className="text-3xl myhead font-bold">
                        {serviceDetails[0]?.pricing_model === "Hourly"
                          ? "" + serviceDetails[0].hourly_final_list_price
                          : serviceDetails[0]?.pricing_model === "Flat"
                          ? "" + serviceDetails[0].flat_rate_price
                          : serviceDetails[0]?.pricing_model === "Custom"
                          ? "" + serviceDetails[0].price1
                          : "$200"}
                      </p>
                    </div>
                    <p className="text-sm myblack mt-2">
                      {serviceDetails[0]?.fine_print
                        ?.split("\n")
                        .map((line, index) => (
                          <React.Fragment key={index}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                    </p>
                    
                    <ul className="mt-4 myblack text-sm list-disc space-y-1 pl-5">
                      {serviceDetails[0]?.pricing_model === "Hourly" && (
                        <li>
                          {serviceDetails[0]?.hourly_estimated_service_time}
                        </li>
                      )}
                      {serviceDetails[0]?.pricing_model === "Flat" && (
                        <li>
                          {serviceDetails[0]?.flat_estimated_service_time}
                        </li>
                      )}
                      {serviceDetails[0]?.pricing_model === "Custom" && (
                        <li> {serviceDetails[0]?.estimated_service_timing1}</li>
                      )}{" "}
                      {/* You can add your custom logic here */}
                    </ul>
                  </CustomTabPanel>

                  {pricingModel !== "Flat" && pricingModel !== "Hourly" && (
                    <CustomTabPanel value={value} index={1}>
                      <div className="flex justify-between">
                        <h2 className="text-2xl font-medium myhead">
                          {serviceDetails[0]?.pricing_model}
                        </h2>
                        <p className="text-3xl myhead font-bold">
                          {serviceDetails[0]?.price2}
                        </p>
                      </div>
                      <p className="text-sm myblack mt-2">
                        {serviceDetails[0]?.fine_print
                          ?.split("\n")
                          .map((line, index) => (
                            <React.Fragment key={index}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                      </p>

                      <ul className="mt-4 myblack text-sm list-disc space-y-1 pl-5">
                        <li>{serviceDetails[0]?.estimated_service_timing2}</li>
                      </ul>
                    </CustomTabPanel>
                  )}

                  {pricingModel !== "Flat" && pricingModel !== "Hourly" && (
                    <CustomTabPanel value={value} index={2}>
                      <div className="flex justify-between">
                        <h2 className="text-2xl font-medium myhead">
                          {serviceDetails[0]?.pricing_model}
                        </h2>
                        <p className="text-3xl myhead font-bold">
                          {serviceDetails[0]?.price3}
                        </p>
                      </div>
                      <p className="text-sm myblack mt-2">
                        {serviceDetails[0]?.fine_print
                          ?.split("\n")
                          .map((line, index) => (
                            <React.Fragment key={index}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                      </p>

                      <ul className="mt-4 myblack text-sm list-disc space-y-1 pl-5">
                        <li> {serviceDetails?.estimated_service_timing3}</li>
                      </ul>
                    </CustomTabPanel>
                  )}
                </Box>
              </div>
              <button
                onClick={handlecontactOpen}
                className="flex mt-3 lg:mt-0 py-3 justify-center items-center px-6 font-semibold rounded-lg text-[#fff] bg-[#FB8803]"
              >
                <IoChatbubbleEllipsesOutline className="me-2 text-[#fff] text-xl" />
                <span>Contact Pro</span>
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-wrap mt-3">
            <div className="flex flex-wrap mt-3">
              {serviceDetails[0]?.search_tags &&
              serviceDetails[0]?.search_tags.length > 0
                ? serviceDetails[0]?.search_tags
                    .split(",")
                    .map((tag, index) => (
                      <span
                        key={index}
                        className="bg-[#E7F4FB] text-[#0F91D2] px-4 py-2 rounded-full text-sm me-2"
                      >
                        {tag.trim()} {/* Remove extra spaces */}
                      </span>
                    ))
                : "No tags available"}
            </div>
          </div>
          <h2 className="mt-4 text-xl myhead font-semibold">
            Deal Description
          </h2>
          <p className="mt-2 myblack">
            {serviceDetails[0]?.service_description ||
              "No description available."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetail;
