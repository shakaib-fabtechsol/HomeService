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
import { FiPhone } from "react-icons/fi";
import { BiMessageAltDetail, BiMessageSquareDetail } from "react-icons/bi";
import { TbMailDown } from "react-icons/tb";
import { PiChats } from "react-icons/pi";
import down from "../../assets/img/chevronDown.png";
import { Modal } from "@mui/material";
import Review from "../../Components/Profile/Review";
import Social from "../../Components/Profile/AdditionalPhoto/Social";
import SpecialHour from "../../Components/Profile/AdditionalPhoto/SpecialHour";
import Insurance from "../../Components/Profile/AdditionalPhoto/Insurance";
import VehiclePhoto from "../../Components/Profile/AdditionalPhoto/VehiclePhoto";
import FacilityPhoto from "../../Components/Profile/AdditionalPhoto/FacilityPhoto";
import ProjectPhoto from "../../Components/Profile/AdditionalPhoto/ProjectPhoto";
import License from "../../Components/Profile/AdditionalPhoto/License";
import Award from "../../Components/Profile/AdditionalPhoto/Award";
import TechniciansPhoto from "../../Components/Profile/AdditionalPhoto/TechniciansPhoto";
import ProfileDeal from "../../Components/Profile/ProfileDeal";

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

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  useEffect(() => {
    document.title = "Profile Details";
  }, []);




  const categories = ["Category 01", "Category 02", "Category 03"];





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




  return (
    <div className="pmain">
      <div className="flex items-center navv">
        <Link to="/customer/services">
          <FaArrowLeft className="me-4 text-xl" />
        </Link>
        <h2 className="text-2xl font-semibold">Profile Details</h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-between mt-4 lg:items-start">
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
                  <span className="myhead text-xs font-semibold me-1">4.9</span>
                  <p className="text-[#181D2766] underline text-xs">
                    (457)
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap mt-2">
              <p className="myblack pe-3 me-3 border-e">House Cleaning</p>
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
      </div>
      {/* ----------deal-boxes------ */}
      <div className="mt-4">
        <ProfileDeal/>
      </div>
      {/* ----------photos accordian------ */}
      <div className="additional">
        <h2 className="text-2xl mt-4 font-semibold myhead">Additional Photos</h2>
        <div>
          <Accordion expanded={expanded === "Technicians"} onChange={handleChange("Technicians")}>
            <AccordionSummary aria-controls={`Techniciansd-content`} id={`Techniciansd-header`}>
              <h3 className="me-3">Technicians Photo</h3>
            </AccordionSummary>
            <AccordionDetails>
              <TechniciansPhoto />
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "Vehicle"} onChange={handleChange("Vehicle")}>
            <AccordionSummary aria-controls={`Vehicled-content`} id={`Vehicled-header`}>
              <h3 className="me-3">Vehicle Photo</h3>
            </AccordionSummary>
            <AccordionDetails>
              <VehiclePhoto />
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "Facilty"} onChange={handleChange("Facilty")}>
            <AccordionSummary aria-controls={`Faciltyd-content`} id={`Faciltyd-header`}>
              <h3 className="me-3">Facilty Photo</h3>
            </AccordionSummary>
            <AccordionDetails>
              <FacilityPhoto />
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "Project"} onChange={handleChange("Project")}>
            <AccordionSummary aria-controls={`Projectd-content`} id={`Projectd-header`}>
              <h3 className="me-3">Project Photo</h3>
            </AccordionSummary>
            <AccordionDetails>
              <ProjectPhoto />
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "License"} onChange={handleChange("License")}>
            <AccordionSummary aria-controls={`Licensed-content`} id={`Licensed-header`}>
              <h3 className="me-3">License Photo</h3>
            </AccordionSummary>
            <AccordionDetails>
              <License />
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "Award"} onChange={handleChange("Award")}>
            <AccordionSummary aria-controls={`Awardd-content`} id={`Awardd-header`}>
              <h3 className="me-3">Award Photo</h3>
            </AccordionSummary>
            <AccordionDetails>
              <Award />
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "Insurance"} onChange={handleChange("Insurance")}>
            <AccordionSummary aria-controls={`Insuranced-content`} id={`Insuranced-header`}>
              <h3 className="me-3">Insurance</h3>
            </AccordionSummary>
            <AccordionDetails>
              <Insurance />
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "SpecialHour"} onChange={handleChange("SpecialHour")}>
            <AccordionSummary aria-controls={`SpecialHourd-content`} id={`SpecialHourd-header`}>
              <h3 className="me-3">Special Hours of Operation</h3>
            </AccordionSummary>
            <AccordionDetails>
              <SpecialHour />
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "Socials"} onChange={handleChange("Socials")}>
            <AccordionSummary aria-controls={`Socialsd-content`} id={`Socialsd-header`}>
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
        <Review />
      </div>
    </div>
  );
}

export default ProfileDetails;
