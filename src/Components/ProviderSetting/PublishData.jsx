import React, { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaChevronDown, FaRegCalendarAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import provider from "../../assets/img/provider.png";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import Swal from "sweetalert2";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Modal } from "@mui/material";
import { FiPhone } from "react-icons/fi";
import { BiMessageAltDetail, BiMessageSquareDetail } from "react-icons/bi";
import { TbMailDown } from "react-icons/tb";
import { PiChats } from "react-icons/pi";
import { useLocation } from "react-router-dom";
import Review from "../../Components/Profile/Review";
import Social from "../../Components/Profile/AdditionalPhoto/Social";
import RegularHour from "../../Components/Profile/AdditionalPhoto/RegularHour";
import SpecialHour from "../../Components/Profile/AdditionalPhoto/SpecialHour";
import Insurance from "../../Components/Profile/AdditionalPhoto/Insurance";
import VehiclePhoto from "../../Components/Profile/AdditionalPhoto/VehiclePhoto";
import FacilityPhoto from "../../Components/Profile/AdditionalPhoto/FacilityPhoto";
import ProjectPhoto from "../../Components/Profile/AdditionalPhoto/ProjectPhoto";
import License from "../../Components/Profile/AdditionalPhoto/License";
import Award from "../../Components/Profile/AdditionalPhoto/Award";
import TechniciansPhoto from "../../Components/Profile/AdditionalPhoto/TechniciansPhoto";
import VedioChannal from "../../Components/Profile/AdditionalPhoto/Vedio";
import ProfileDeal from "../../Components/Profile/ProfileDeal";
import Loader from "../../Components/MUI/Loader";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `none`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<FaChevronDown sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "transparent",
  width: "auto",
  border: "none",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(180deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
    border: "none",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  border: "none",
}));

function ProfileDetails() {
  const [expanded, setExpanded] = React.useState("panel1");
  const [isApiLoaded, setIsApiLoaded] = useState(false);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  useEffect(() => {
    document.title = "Profile Details";
  }, []);

  const navigate = useNavigate();
  const [contactopen, setcontactOpen] = React.useState(false);
  const handlecontactOpen = () => setcontactOpen(true);
  const [loading, setLoading] = useState(false);
  const handlecontactClose = () => setcontactOpen(false);
  const [formdata, setFormData] = useState(null);
  const [publishValue, setPublishValue] = useState(1);
  const userId = localStorage.getItem("id");

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

        setFormData(response.data);
        setIsApiLoaded(true);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    // Retrieve user ID here
    const userId = localStorage.getItem("id");
    if (!userId) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Service ID is required!",
      });
      return;
    }

    setLoading(true);

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

    try {
      const response = await axios.get(
        `https://backend.homeprodeals.com/api/SettingPublish/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );


      if (response.status === 200) {
        setFormData((prev) => ({ ...prev, publish: response.data.publish }));
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Setting updated successfully.",
          confirmButtonColor: "#0F91D2",
        });
        navigate("/provider/services");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: response.data.message || "Failed to update deal.",
          confirmButtonColor: "#D33",
        });
      }
    } catch (error) {
      console.error("Error updating deal:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "There was an error updating the deal.",
      });
    } finally {
      setLoading(false);
    }
  };

  const imagePath = formdata?.businessProfile[0]?.business_logo;
  const imageUrl = imagePath
    ? `https://backend.homeprodeals.com/uploads/${imagePath}`
    : "/default.png";
  const regularHours = JSON.parse(
    formdata?.businessProfile[0]?.regular_hour || "[]"
  );
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

  return (
    <>
      {userId && !isApiLoaded ? (
        <Loader />
      ) : (
        <div>
          <div className="flex flex-col lg:flex-row justify-between mt-4 lg:items-start">
            <div className="flex flex-wrap items-center">
              <img
                src={imageUrl}
                alt=""
                className="me-2 my-2 rounded-lg max-w-[120px]"
              />
              <div className="my-2">
                <div className="flex items-center">
                  <Link to="/provider/ProfileDetails">
                    <p className="font-semibold myhead me-2">
                      {formdata?.businessProfile[0]?.business_name}
                    </p>
                  </Link>
                  <div className="flex ms-3">
                    <IoIosStar className="me-1 text-[#F8C600]" />
                    <div className="flex flex-wrap">
                      <span className="myhead text-xs font-semibold me-1">
                        4.9
                      </span>
                      <p className="text-[#181D2766] underline text-xs">
                        (457)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap mt-2">
                  <div className="flex items-center">
                    <IoLocationOutline className="me-2 myblack" />
                    <p className="myblack ">
                      {formdata?.businessProfile[0]?.conversation_address}
                    </p>
                  </div>
                </div>
                <div className="flex mt-2 items-center">
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
            </div>
          </div>

          <div className="additional">
            <h2 className="text-2xl lg:mt-10   font-semibold myhead">
              Additional Info
            </h2>
            <div>
              <Accordion
                expanded={expanded === "Video"}
                onChange={handleChange("Video")}
              >
                <AccordionSummary
                  aria-controls={`Video-content`}
                  id={`Video-header`}
                >
                  <h3 className="me-3">About Us Video</h3>
                </AccordionSummary>
                <AccordionDetails>
                  <VedioChannal />
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "Technicians"}
                onChange={handleChange("Technicians")}
              >
                <AccordionSummary
                  aria-controls={`Techniciansd-content`}
                  id={`Techniciansd-header`}
                >
                  <h3 className="me-3">Technicians Photo</h3>
                </AccordionSummary>
                <AccordionDetails>
                  <TechniciansPhoto />
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "Vehicle"}
                onChange={handleChange("Vehicle")}
              >
                <AccordionSummary
                  aria-controls={`Vehicled-content`}
                  id={`Vehicled-header`}
                >
                  <h3 className="me-3">Vehicle Photo</h3>
                </AccordionSummary>
                <AccordionDetails>
                  <VehiclePhoto />
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "Facilty"}
                onChange={handleChange("Facilty")}
              >
                <AccordionSummary
                  aria-controls={`Faciltyd-content`}
                  id={`Faciltyd-header`}
                >
                  <h3 className="me-3">Facilty Photo</h3>
                </AccordionSummary>
                <AccordionDetails>
                  <FacilityPhoto />
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "Project"}
                onChange={handleChange("Project")}
              >
                <AccordionSummary
                  aria-controls={`Projectd-content`}
                  id={`Projectd-header`}
                >
                  <h3 className="me-3">Project Photo</h3>
                </AccordionSummary>
                <AccordionDetails>
                  <ProjectPhoto />
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "License"}
                onChange={handleChange("License")}
              >
                <AccordionSummary
                  aria-controls={`Licensed-content`}
                  id={`Licensed-header`}
                >
                  <h3 className="me-3">License Photo</h3>
                </AccordionSummary>
                <AccordionDetails>
                  <License />
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "Award"}
                onChange={handleChange("Award")}
              >
                <AccordionSummary
                  aria-controls={`Awardd-content`}
                  id={`Awardd-header`}
                >
                  <h3 className="me-3">Award Photo</h3>
                </AccordionSummary>
                <AccordionDetails>
                  <Award />
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "Insurance"}
                onChange={handleChange("Insurance")}
              >
                <AccordionSummary
                  aria-controls={`Insuranced-content`}
                  id={`Insuranced-header`}
                >
                  <h3 className="me-3">Insurance</h3>
                </AccordionSummary>
                <AccordionDetails>
                  <Insurance />
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "RegularHour"}
                onChange={handleChange("RegularHour")}
              >
                <AccordionSummary
                  aria-controls={`RegularHour-content`}
                  id={`RegularHour-header`}
                >
                  <h3 className="me-3">Regular Hours of Operation</h3>
                </AccordionSummary>
                <AccordionDetails>
                  <RegularHour />
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "SpecialHour"}
                onChange={handleChange("SpecialHour")}
              >
                <AccordionSummary
                  aria-controls={`SpecialHour-content`}
                  id={`SpecialHour-header`}
                >
                  <h3 className="me-3">Special Hours of Operation</h3>
                </AccordionSummary>
                <AccordionDetails>
                  <SpecialHour />
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "Socials"}
                onChange={handleChange("Socials")}
              >
                <AccordionSummary
                  aria-controls={`Socialsd-content`}
                  id={`Socialsd-header`}
                >
                  <h3 className="me-3">Socials</h3>
                </AccordionSummary>
                <AccordionDetails>
                  <Social />
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          {/* <div className="mt-5">
        <Review />
      </div> */}

          <form onSubmit={handleSubmit}>
            <div className="col-span-12 mt-4 flex justify-end">
              <input
                type="text"
                id="Flatr"
                defaultValue={formdata?.id ? `${formdata.id}` : "0"}
                className="focus-none border hidden"
                readOnly
              />
              <input
                type="text"
                id="publish"
                value={publishValue}
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
      )}
    </>
  );
}

export default ProfileDetails;
