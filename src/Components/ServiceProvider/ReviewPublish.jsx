import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaRegTrashCan } from "react-icons/fa6";
import { FaPencilAlt, FaRegCalendarAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import servicedet from "../../assets/img/service-det.png";
import PropTypes from "prop-types";
import { Box, Modal, Tab, Tabs } from "@mui/material";
import { FiPhone } from "react-icons/fi";
import { BiMessageAltDetail, BiMessageSquareDetail } from "react-icons/bi";
import { TbMailDown } from "react-icons/tb";
import { PiChats } from "react-icons/pi";
import {
    IoChatbubbleEllipsesOutline,
    IoLocationOutline,
} from "react-icons/io5";
import { IoIosStar } from "react-icons/io";

import provider from "../../assets/img/provider.png";
import axios from "axios"; // Importing axios
import Swal from "sweetalert2";
// Importing toast if you intend to use it, or replace it with Swal.
import { toast } from "react-toastify"; 

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
  
const ReviewPublish = ({ serviceId, setValue }) => {
    const [value, setValue2] = React.useState(0);
    
    const handleChange = (event, newValue) => {
      setValue2(newValue);
    };
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


  const [loading, setLoading] = useState(false); // Define the loading state
  const [publishValue, setPublishValue] = useState(1); // Default value for publish

  const navigate = useNavigate();

  useEffect(() => {
    console.log("📦 ReviewPublish Received Service ID:", serviceId); // ✅ Debugging
  }, [serviceId]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form default behavior
    if (loading) return; 
    if (!serviceId) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Service ID is required!",
      });
      return;
    }

    setLoading(true); // Show loading state

    const token = localStorage.getItem("token");
    if (!token) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No token found. Please log in.",
      });
      setLoading(false);
      return;
    }
    
    const formData = {
      id: serviceId, // Pass the service ID directly
      publish: publishValue, // Publish value from state
    };

    try {
      const response = await fetch(
        "https://homeservice.thefabulousshow.com/api/DealPublish",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData), // Send data directly without wrapping in pricingData
        }
      );

      const textResponse = await response.text(); // Get response as text
      console.log("Response Text:", textResponse); // Log the raw response

      let result;
      try {
        result = JSON.parse(textResponse); // Try parsing it as JSON
      } catch (error) {
        console.error("Error parsing response:", error);
        throw new Error("Response is not JSON");
      }

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Deal published successfully.",
          confirmButtonColor: "#0F91D2",
        }).then(() => {
          setValue(2); // Switch to Pricing & Packages tab (index 1)
        });

      } else {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: result.message || "Failed to update pricing details.",
          confirmButtonColor: "#D33",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "There was an error while updating the record.",
      });
    } finally {
      setLoading(false); // Set loading to false after the request
    }
  };

  return (
    <div>
        <div>
        <div className="flex flex-col lg:flex-row justify-between mt-8">
  <h2 className="text-xl lg:text-[23px] myhead font-semibold lg:me-2">
    Aliquam erat volutpat. Ut semper ipsum in vestibulum laoreet.
  </h2>
</div>
<div className="grid mt-4 grid-cols-1 md:grid-cols-12 gap-4">
  <div className="col-span-12 xl:col-span-8">
    <div className="">
      <div className="flex flex-wrap items-center">
        <img
          onClick={() => navigate("/provider/ProfileDetails")}
          src={provider}
          alt=""
          className="me-2 my-2 rounded-lg max-w-[120px] cursor-pointer"
        />
        <div className="my-2">
          <div className="flex">
            <p className="font-semibold myhead me-2">Provider Name</p>
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
              <p className="myblack ">Address of the provider here</p>
            </div>
          </div>
          <div className="flex mt-2">
            <div className="flex me-2">
              <FaRegCalendarAlt className="me-2" />
              <p className="text-sm myblack">Hours:</p>
              <p className="text-sm text-[#34A853]"> Available</p>
            </div>
            <p className="text-sm myblack">Close 6PM</p>
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
    <img src={servicedet} alt="" className="rounded-xl w-full" />
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
              <Tab label="Standard" {...a11yProps(1)} />
              <Tab label="Premium" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div className="flex justify-between">
              <h2 className="text-2xl font-medium myhead">
                Plan Title
              </h2>
              <p className="text-3xl myhead font-bold">$200</p>
            </div>
            <p className="text-sm myblack mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Morbi tellus diam, dignissim tincidunt quam vel, rutrum
              egestas lacus. Phasellus accumsan fermentum dolor eu
              gravida. Vivamus dignissim augue sed orci interdum
              vehicula.
            </p>
            <ul className="mt-4 myblack text-sm list-disc space-y-1 pl-5">
              <li>3 Workers</li>
              <li>Delivered Within 2 Days</li>
            </ul>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div className="flex justify-between">
              <h2 className="text-2xl font-medium myhead">
                Plan Title
              </h2>
              <p className="text-3xl myhead font-bold">$400</p>
            </div>
            <p className="text-sm myblack mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Morbi tellus diam, dignissim tincidunt quam vel, rutrum
              egestas lacus. Phasellus accumsan fermentum dolor eu
              gravida. Vivamus dignissim augue sed orci interdum
              vehicula.
            </p>
            <ul className="mt-4 myblack text-sm list-disc space-y-1 pl-5">
              <li>3 Workers</li>
              <li>Delivered Within 2 Days</li>
            </ul>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <div className="flex justify-between">
              <h2 className="text-2xl font-medium myhead">
                Plan Title
              </h2>
              <p className="text-3xl myhead font-bold">$600</p>
            </div>
            <p className="text-sm myblack mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Morbi tellus diam, dignissim tincidunt quam vel, rutrum
              egestas lacus. Phasellus accumsan fermentum dolor eu
              gravida. Vivamus dignissim augue sed orci interdum
              vehicula.
            </p>
            <ul className="mt-4 myblack text-sm list-disc space-y-1 pl-5">
              <li>3 Workers</li>
              <li>Delivered Within 2 Days</li>
            </ul>
          </CustomTabPanel>
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
    <p className="px-3 py-1 font-semibold text-sm rounded-full me-2 text-[#0F91D2] bg-[#E7F4FB]">
      Cleaning
    </p>
    <p className="px-3 py-1 font-semibold text-sm rounded-full me-2 text-[#343434] bg-[#EBEBEB]">
      Residential
    </p>
  </div>
  <h2 className="mt-4 text-xl myhead font-semibold">
    Deal Description
  </h2>
  <p className="mt-2 myblack">
    Donec pulvinar consequat metus eget cursus. Donec nec quam eu arcu
    elementum tempor eu pharetra mauris. Morbi et gravida purus, nec
    sagittis risus. Nulla placerat justo ut dui aliquam efficitur.
    Mauris aliquet mattis odio nec malesuada. Morbi at dui tristique,
    dignissim enim ac, varius nulla. Donec venenatis libero nec ligula
    laoreet laoreet. Sed quis lorem in mi suscipit dictum id nec diam.
    Orci varius natoque penatibus et magnis dis parturient montes,
    nascetur ridiculus mus. Nam at vehicula neque. Proin molestie
    venenatis sem, ut imperdiet leo efficitur vel. Vestibulum nec
    elementum lacus.
  </p>
  <h2 className="mt-4 text-xl myhead font-semibold">Fine Print</h2>
  <ul className="mt-4 myblack text-sm list-disc space-y-1 pl-5">
    <li>Pellentesque maximus augue in tellus fermentum viverra.</li>
    <li>Nunc euismod erat et volutpat tincidunt.</li>
    <li>In sit amet enim in nisl fermentum venenatis et ut dui.</li>
    <li>
      Phasellus vel orci pretium, tristique magna at, porttitor neque.
    </li>
    <li>
      Integer mollis ligula eu tortor porttitor, sit amet elementum
      dolor feugiat.
    </li>
  </ul>
</div>
        </div>
      <form onSubmit={handleSubmit}>
        <div className="col-span-12 mt-4 flex justify-end">
          <input
            type="text"
            id="Flatr"
            defaultValue={serviceId ? `${serviceId}` : "0"} // ✅ Using defaultValue instead of value
            className="focus-none border hidden"
            readOnly
          />
          <input
            type="text"
            id="publish"
            value={publishValue} // Set value for the publish input
            className="focus-none border hidden"
            readOnly
          />
          <button
            type="button"
            className="border rounded-lg w-[150px] py-[10px] mr-4 font-semibold bg-white"
            onClick={() => navigate("/somewhere")} // Navigate on cancel
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="border rounded-lg w-[150px] py-[10px] text-white font-semibold bg-[#0F91D2]"
          >
            {loading ? "Publishing..." : "Publish"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewPublish;
