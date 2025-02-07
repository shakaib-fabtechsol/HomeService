import React, { useEffect } from "react";
import { IoIosStar } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaChevronDown, FaRegCalendarAlt } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import provider from "../../assets/img/provider.png";

import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import random1 from "../../assets/img/random1.png";
import random2 from "../../assets/img/random2.png";
import random3 from "../../assets/img/random3.png";
import { Modal } from "@mui/material";
import { FiPhone } from "react-icons/fi";
import { BiMessageAltDetail, BiMessageSquareDetail } from "react-icons/bi";
import { TbMailDown } from "react-icons/tb";
import { PiChats } from "react-icons/pi";
import down from "../../assets/img/chevronDown.png";
import Review from "../../Components/Profile/Review";
import ProfileDeal from "../../Components/Profile/ProfileDeal";
import Social from "../../Components/Profile/AdditionalPhoto/Social";

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
    expandIcon={<FaChevronDown className="text-sm" />}
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

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  useEffect(() => {
    document.title = "Profile Details";
  }, []);

  const categories = ["Category 01", "Category 02", "Category 03"];

  const accordionData = [
    {
      title: "Technician Photos",
      images: [random1, random2, random3],
    },
    {
      title: "Vehicle Photos",
      images: [random1, random2, random3],
    },
    {
      title: "Facility Photos",
      images: [random1, random2, random3],
    },
    {
      title: "Project Photos",
      images: [random1, random2, random3],
    },
    {
      title: "Licences",
      images: [random1, random2, random3],
    },
    {
      title: "Awards",
      images: [random1, random2, random3],
    },
    {
      title: "Insurance",
      images: [random1, random2, random3],
    },
  ];

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

  const SpecialHours = [
    { Dates: "24 Dec 2025", time: "9AM - 5PM", dayName: "Chrismas Eve" },
    { Dates: "25 Dec 2025", time: "9AM - 5PM", dayName: "Christmas" },
  ];

  return (
    <div className="pmain">
      <div className="flex items-center navv">
        <Link to="/provider/services">
          <FaArrowLeft className="me-4 text-xl" />
        </Link>
        <h2 className="text-2xl font-semibold">Profile Details</h2>
      </div>
      <div className="btm">
        <div className="flex flex-col lg:flex-row justify-between lg:items-start">
          <div className="flex flex-wrap items-center">
            <img
              src={provider}
              alt=""
              className="me-2 my-2 rounded-lg max-w-[120px]"
            />
            <div className="my-2">
              <div className="flex items-center">
                <p className="font-semibold myhead me-2">Provider Name</p>
                <div className="flex ms-3">
                  <IoIosStar className="me-1 text-[#F8C600]" />
                  <div className="flex flex-wrap">
                    <span className="myhead text-xs font-semibold me-1">
                      4.9
                    </span>
                    <p className="text-[#181D2766] underline text-xs">(457)</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap mt-2">
                <p className="myblack pe-3 me-3 border-e">House Cleaning</p>
                <div className="flex items-center">
                  <IoLocationOutline className="me-2 myblack" />
                  <p className="myblack ">Address of the provider here</p>
                </div>
              </div>
              <div className="flex mt-2 items-center">
                <div className="flex me-2">
                  <FaRegCalendarAlt className="me-2" />
                  <p className="text-sm myblack">Hours:&nbsp;</p>
                  <p className="text-sm text-[#34A853] font-[300]">Available</p>
                </div>
                <div className="relative w-[6px] h-[6px] bg-[#5358624D] rounded-full me-2"></div>
                <select
                  name=""
                  id=""
                  className="text-sm myblack bg-transparent"
                >
                  <option value="">Close 6PM</option>
                </select>
              </div>
            </div>
          </div>
          <button
            onClick={handlecontactOpen}
            className="flex mt-3 lg:mt-0 py-3 justify-center items-center px-6 font-semibold rounded-lg text-[#fff] bg-[#FB8803] w-full lg:max-w-[300px] lg:fixed right-[38px] z-[99]"
          >
            <IoChatbubbleEllipsesOutline className="me-2 text-[#fff] text-xl" />
            <span>Contact Pro</span>
          </button>
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
        <div className="mt-6">
          <h2 className="text-lg font-medium myhead">About Me</h2>
          <p className="myblack mt-3">
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
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-medium myhead">
            Secondary Business Categories
          </h2>
          <div className="flex flex-wrap mt-3">
            <p className="px-3 my-1 py-1 font-medium text-sm rounded-full me-2 text-[#343434] bg-[#EBEBEB]">
              Category 01
            </p>
            <p className="px-3 my-1 py-1 font-medium text-sm rounded-full me-2 text-[#343434] bg-[#EBEBEB]">
              Category 02
            </p>
            <p className="px-3 my-1 py-1 font-medium text-sm rounded-full me-2 text-[#343434] bg-[#EBEBEB]">
              Category 03
            </p>
            <p className="px-3 my-1 py-1 font-medium text-sm rounded-full me-2 text-[#343434] bg-[#EBEBEB]">
              Category 04
            </p>
            <p className="px-3 my-1 py-1 font-medium text-sm rounded-full me-2 text-[#343434] bg-[#EBEBEB]">
              Category 05
            </p>
          </div>
        </div>
        {/* ----------deal-boxes------ */}
        <ProfileDeal />
        {/* ----------photos accordian------ */}
        <div className="additional">
          <h2 className="text-2xl mt-4 font-semibold myhead">
            Additional Photos
          </h2>
          <div>
            {accordionData.map((data, index) => {
              const panelId = `panel${index + 1}`;
              return (
                <Accordion
                  key={panelId}
                  expanded={expanded === panelId}
                  onChange={handleChange(panelId)}
                >
                  <AccordionSummary
                    aria-controls={`${panelId}d-content`}
                    id={`${panelId}d-header`}
                  >
                    <h3 className="text-lg me-4">{data.title}</h3>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
                      {data.images.map((image, i) => (
                        <div className="my-2 md:my-0" key={i}>
                          <img
                            src={image}
                            alt={`Accordion ${index + 1} - Image ${i + 1}`}
                            className="w-full rounded-lg"
                          />
                        </div>
                      ))}
                    </div>
                  </AccordionDetails>
                </Accordion>
              );
            })}
            <Accordion
              expanded={expanded === "SpecialHour"}
              onChange={handleChange("SpecialHour")}
            >
              <AccordionSummary
                aria-controls={`SpecialHourd-content`}
                id={`SpecialHourd-header`}
              >
                <h3 className="me-3">Special Hours of Operation</h3>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  {SpecialHours.map((row, index) => (
                    <div key={index} className="py-5 border-b border-[#E9EAEB]">
                      <div className="flex items-center flex-wrap gap-3 justify-between py-3 px-4 bg-[#FAFAFA] min-h-[60px] rounded-[8px]">
                        <div className="flex gap-3 items-center">
                          <div>
                            <p className="font-medium text-[#343434]">
                              {row.Dates}
                            </p>
                          </div>
                        </div>
                        <div className="ms-auto">
                          <p>{row.dayName}</p>
                          <p>{row.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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
        {/* --------reviews--------- */}
        <div className="mt-5">
          <div className="flex gap-4 flex-wrap">
            <h2 className="text-2xl font-bold">Reviews</h2>
            <div className="flex flex-wrap justify-end items-center gap-3 ms-auto">
              <select
                style={{
                  backgroundImage: `url(${down})`,
                  backgroundPosition: "5px",
                }}
                className="ps-6 text-[#414651] text-sm font-semibold focus:outline-none border border-[#D5D7DA] p-3 rounded-[8px] shadow-[0px_1px_2px_0px_#0A0D120D] back appearance-none bg-no-repeat"
                name="byRate"
                id="byRate"
              >
                <option value="" hidden>
                  Filter by Rate
                </option>
                <option value="">0$ to 99$</option>
                <option value="">100$ to 199$</option>
                <option value="">200$ to 299$</option>
                <option value="">300$ to 399$</option>
              </select>
              <select
                style={{
                  backgroundImage: `url(${down})`,
                  backgroundPosition: "5px",
                }}
                className="ps-6 text-[#414651] text-sm font-semibold focus:outline-none border border-[#D5D7DA] p-3 rounded-[8px] shadow-[0px_1px_2px_0px_#0A0D120D] back appearance-none bg-no-repeat"
                name="byService"
                id="byService"
              >
                <option value="" hidden>
                  Filter by Service
                </option>
                <option value="">Service 1</option>
                <option value="">Service 2</option>
                <option value="">Service 3</option>
                <option value="">Service 4</option>
              </select>
            </div>
          </div>
          {/* Individual Reviews */}
          <Review />
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
