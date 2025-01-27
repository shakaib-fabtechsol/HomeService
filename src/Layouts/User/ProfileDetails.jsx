import React, { useEffect } from "react";
import { IoIosStar } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaRegCalendarAlt } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import provider from "../../assets/img/provider.png";
import service1 from "../../assets/img/service1.png";
import service2 from "../../assets/img/service2.png";
import service3 from "../../assets/img/service3.png";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import random1 from "../../assets/img/random1.png";
import random2 from "../../assets/img/random2.png";
import random3 from "../../assets/img/random3.png";
import { Star } from "lucide-react";
import reviewuser from "../../assets/img/reviewuser.png";
import { Modal, Rating } from "@mui/material";
import { FiPhone } from "react-icons/fi";
import { BiMessageAltDetail, BiMessageSquareDetail } from "react-icons/bi";
import { TbMailDown } from "react-icons/tb";
import { PiChats } from "react-icons/pi";

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
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "transparent",
  border: "none",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
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

function ServiceBox({ image, title, price, description, tags }) {
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
    </Link>
  );
}

function ProfileDetails() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  useEffect(() => {
    document.title = "Profile Details";
  }, []);

  const services = [
    {
      image: service1,
      title: "Service 1",
      price: 50,
      description: "This is a description for Service 1.",
      tags: [
        { label: "Primary", type: "primary" },
        { label: "Secondary", type: "secondary" },
      ],
    },
    {
      image: service2,
      title: "Service 2",
      price: 75,
      description: "This is a description for Service 2.",
      tags: [
        { label: "New", type: "primary" },
        { label: "Popular", type: "secondary" },
      ],
    },
    {
      image: service3,
      title: "Service 3",
      price: 100,
      description: "This is a description for Service 3.",
      tags: [
        { label: "Featured", type: "primary" },
        { label: "Limited", type: "secondary" },
      ],
    },
  ];

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
    {
      title: "Special Hours of Operation",
      images: [random1, random2, random3],
    },
  ];

  const reviews = [
    {
      name: "Patricia Sanders",
      userimg: [reviewuser],
      title: "Service Title",
      date: "Jan 20, 2024",
      rating: 5,
      review:
        "Sed mollis porttitor mauris eu egestas. Sed vel augue non massa maximus suscipit. Nulla a pharetra leo, eget cursus diam. Phasellus ultrices in urna in faucibus. Aliquam vulputate enim finibus condimentum tincidunt.",
    },
    {
      name: "Katie Sims",
      userimg: [reviewuser],
      title: "Service Title",
      date: "Jan 20, 2024",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis accumsan turpis. Phasellus tincidunt neque sed nunc mattis molestie. Praesent auctor metus sit amet elit finibus, ac sodales enim egestas.",
    },
  ];

  const starCounts = [
    { stars: 5, count: 488 },
    { stars: 4, count: 74 },
    { stars: 3, count: 14 },
    { stars: 2, count: 0 },
    { stars: 1, count: 0 },
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

  const [reviewopen, setreviewOpen] = React.useState(true);
  const handlereviewOpen = () => setreviewOpen(true);
  const handlereviewClose = () => setreviewOpen(false);

  const [value, setValue] = React.useState(2);

  return (
    <div>
      <div className="flex items-center">
        <Link to="/services">
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
        <button
          onClick={handlecontactOpen}
          className="flex mt-3 lg:mt-0 py-3 justify-center items-center px-6 font-semibold rounded-lg text-[#fff] bg-[#FB8803]"
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] outline-none">
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
        <Modal
          open={reviewopen}
          onClose={handlereviewClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{ m: 2 }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] outline-none">
            <div className="bg-white rounded-[12px] p-4 max-h-[calc(100dvh-200px)] overflow-y-auto scroll-x-hidden">
              <form action="">
                <div className="flex flex-col items-center gap-5">
                  <p className="text-[24px] text-[#181D27] text-center font-medium">
                    Leave a Review
                  </p>
                  <p className="text-[#535862] text-center">
                    How would you rate working?
                  </p>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    sx={{
                      display: "flex !important",
                      gap: "15px",
                      fontSize: "36px",
                    }}
                  />
                  <textarea
                    className="bg-[#F6F6F6] border-[#F6F6F6] p-3 w-full rounded-[10px] placeholder:text-[#858585]"
                    rows={6}
                    name=""
                    id=""
                    placeholder="Write a review...."
                  />
                  <button
                    className="text-white bg-[#0F91D2] p-3 rounded-[8px] font-semibold w-full mt-6"
                    type="submit"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-medium myhead">About Me</h2>
        <p className="myblack mt-3">
          Donec pulvinar consequat metus eget cursus. Donec nec quam eu arcu
          elementum tempor eu pharetra mauris. Morbi et gravida purus, nec
          sagittis risus. Nulla placerat justo ut dui aliquam efficitur. Mauris
          aliquet mattis odio nec malesuada. Morbi at dui tristique, dignissim
          enim ac, varius nulla. Donec venenatis libero nec ligula laoreet
          laoreet. Sed quis lorem in mi suscipit dictum id nec diam. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Nam at vehicula neque. Proin molestie venenatis sem, ut imperdiet
          leo efficitur vel. Vestibulum nec elementum lacus.
        </p>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-medium myhead">
          Secondary Business Categories
        </h2>
        <div className="flex flex-wrap">
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
      <div className="mt-4">
        <div className="md:flex justify-between items-center">
          <h2 className="text-lg font-medium myhead">My Deals</h2>
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
      {/* ----------photos accordian------ */}
      <div className="additional">
        <h2 className="text-lg mt-4 font-medium myhead">Additional Photos</h2>
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
                  <h3>{data.title}</h3>
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
        </div>
      </div>
      {/* --------reviews--------- */}
      <div className="mt-5">
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        <div className="flex flex-col md:flex-row items-center gap-10 xl:px-10">
          <div className="text-center md:text-left">
            <p className="text-5xl font-bold">4.7</p>
            <div className="flex items-center justify-center md:justify-start mt-2">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className="text-yellow-500 w-6 h-6"
                  fill="currentColor"
                />
              ))}
            </div>
            <p className="text-gray-500 mt-1">(578 Reviews)</p>
          </div>
          <div className="ms-auto w-full lg:w-[70%]">
            {starCounts.map(({ stars, count }) => (
              <div key={stars} className="flex items-center gap-4 mb-1">
                <span className="text-sm text-nowrap font-medium text-gray-600">
                  {stars} stars
                </span>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-yellow-500 h-2.5 rounded-full"
                    style={{ width: `${(count / 578) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-600">
                  {count}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Individual Reviews */}
        <div className="mt-8 space-y-8">
          {reviews.map((review, index) => (
            <div key={index} className="border-t pt-4">
              <div className="">
                <p className="text-sm text-gray-500 mb-2">{review.date}</p>
                <div className="flex items-center mb-2">
                  {[...Array(review.rating)].map((_, index) => (
                    <Star
                      key={index}
                      className="text-yellow-500 w-5 h-5"
                      fill="currentColor"
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src={review.userimg}
                  alt=""
                  className="me-2 rounded-full w-[30px] h-[30px]"
                />
                <div>
                  <h3 className="font-semibold text-lg">{review.name}</h3>
                  <p className="text-sm text-gray-400">{review.title}</p>
                </div>
              </div>
              <p className="text-gray-600 mt-2">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
