import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { MenuItem, Select } from "@mui/material";
import profileImg from "../../assets/img/service3.png";
import { FaPlus } from "react-icons/fa6";
import SettingsPreview from "../../Components/MUI/SettingsPreview";
import Facebook from "../../assets/img/Facebook-icon.png";
import Youtube from "../../assets/img/Youtube-icon.png";
import Twitter from "../../assets/img/Twitter-icon.png";
import Instagram from "../../assets/img/Instagram-icon.png";
import Linkdin from "../../assets/img/Linkdin-icon.png";
import Business from "../../assets/img/Business-icon.png";
import { CiTrash } from "react-icons/ci";
import { FaPencilAlt } from "react-icons/fa";
import location from "../../assets/img/location.png";
import close from "../../assets/img/close.png";
import { Link } from "react-router";


function TabPanel(props) {
  useEffect(() => {
    document.title = "New Deals";
  }, []);
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
function Settings() {
  useEffect(() => {
    document.title = "Settings";
  }, []);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [isSelectsalespEnabled, setIsSelectsalespEnabled] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleRefferChange = (event) => {
    const selectedValue = event.target.value;
    setIsSelectsalespEnabled(selectedValue === "Yes");
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const options = [
    { value: "1", label: "John Doe", avatar: profileImg },
    { value: "2", label: "Jane Smith", avatar: profileImg },
    { value: "3", label: "Chris Evans", avatar: profileImg },
  ];

  const Businesscategories = [
    "Plumbing",
    "Sewer & Septic",
    "Electrical",
    "HVAC / Heating & Cooling",
    "Insulation",
    "Concrete",
    "Bricklayer",
    "Windows & Doors",
    "Flooring",
    "Garage Doors",
    "Concrete Floor Coatings",
    "Mini Barns",
    "Pole Barns",
    "Roofing",
    "Gutters",
    "Siding",
    "Exterior Trim",
    "Landscaping",
    "Hardscapes",
    "Outdoor Living",
    "Pool & Spa",
    "Fence and Gates",
    "Handyman Services",
    "Security",
    "Home Inspections",
    "Structural Engineer",
    "Foundation Repair",
    "Waterproofing",
    "Crawlspace Repair",
    "Mold Testing",
    "Mold Restoration",
    "Water & Fire Restoration Service",
    "Hazardous Waste Removal",
    "Interior Design",
    "Kitchen",
    "Bath",
    "Interior Decorating",
    "Window and Door Coverings",
    "Window Tinting",
    "Interior Trim",
    "Cleaning Service",
    "Organizing",
    "Painting",
    "Drywall",
    "Wall Coverings",
    "Chimney Sweep",
    "Excavation",
    "Grading",
    "Blacktop & Sealcoating",
    "Lighting",
    "Moving",
    "Storage Containers",
    "Piano Movers",
    "Realtor",
    "Home Network & Computer",
    "Computer Repair",
    "Appliance Repair",
    "Nursing",
    "Drain Services",
    "Veterinary Service",
  ];

  const socialLinks = [
    {
      name: "Facebook",
      avatar: Facebook,
      link: "https://www.facebook.com/username",
    },
    {
      name: "Twitter",
      avatar: Twitter,
      link: "",
    },
    {
      name: "Instagram",
      avatar: Instagram,
      link: "",
    },
    {
      name: "LinkedIn",
      avatar: Linkdin,
      link: "",
    },
    {
      name: "YouTube",
      avatar: Youtube,
      link: "",
    },
    {
      name: "Google Business",
      avatar: Business,
      link: "",
    },
  ];

  return (
    <div>
      <div className="flex items-center">
        <h2 className="text-2xl font-semibold">Settings</h2>
      </div>
      <p className="text-[#535862] mt-4">
        Track, manage and forecast your customers and orders.
      </p>
      <Box sx={{ width: "100%", typography: "body1", marginTop: "20px" }}>
        <Box>
          <Tabs
            TabIndicatorProps={{ sx: { display: "none" } }}
            sx={{
              "& .MuiTab-root": {
                color: "#717680",
                fontWeight: "600",
                fontFamily: "inter",
              },
              "& .Mui-selected": {
                color: "#0F91D2 !important",
                borderBottom: "solid 4px #0F91D2",
                fontFamily: "inter",
              },
            }}
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="My details" />
            <Tab label="Location" />
            <Tab label="Business Profile " />
            <Tab label="Certifications & Hours" />
            <Tab label="Payment/Payout Info" />
            <Tab label="Additional Photos" />
            <Tab label="Social Profiles" />
            <Tab label="Password" />
            <Tab label="Channels for Conversations" />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <div>
            <div className="flex justify-between border-b border-[#E9EAEB] pb-5 items-center flex-wrap gap-4">
              <div>
                <p className="text-lg font-semibold text-[#181D27]">
                  Personal Profile
                </p>
                <p className="text-[#535862] text-sm">
                  update your personal profile details.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-center ms-auto justify-end">
                <button className="text-[#414651] font-semibold text-sm border border-[#D5D7DA] shadow-[0px 1px_2px_0px_#0A0D120D] bg-[#FFFFFF] rounded-[8px] py-3 px-4">
                  Cancel
                </button>
                <button className="text-[#ffffff] font-semibold text-sm border border-[#0F91D2] shadow-[0px 1px_2px_0px_#0A0D120D] bg-[#0F91D2] rounded-[8px] py-3 px-4">
                  Save
                </button>
              </div>
            </div>
            <div className="max-w-[1000px]">
              <div className="grid sm:grid-cols-3 gap-2 py-8 border-b">
                <div>
                  <label className="text-sm font-semibold" htmlFor="fname">
                    Full Name
                  </label>
                </div>
                <div className="sm:col-span-2">
                  <input
                    className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                    defaultValue={"Mike Bird"}
                    type="text"
                    name="fname"
                    id="fname"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-2 py-8 border-b">
                <div>
                  <label className="text-sm font-semibold" htmlFor="Email">
                    Email address
                  </label>
                </div>
                <div className="sm:col-span-2">
                  <input
                    className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                    defaultValue={"mikebird@example.com"}
                    type="email"
                    name="Email"
                    id="Email"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-2 py-8 border-b">
                <div>
                  <label className="text-sm font-semibold" htmlFor="Phone">
                    Phone Number
                  </label>
                </div>
                <div className="sm:col-span-2">
                  <input
                    className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                    defaultValue={"+92 311 555 66622"}
                    type="tel"
                    name="Phone"
                    id="Phone"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-2 py-8 border-b">
                <div>
                  <p className="text-sm font-semibold text-[#414651]">
                    Your photo
                  </p>
                  <p className="text-[#535862] text-sm">
                    This will be displayed on your profile.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <SettingsPreview />
                </div>
              </div>
              <div className="py-8 flex flex-col gap-4">
                <div className="grid sm:grid-cols-3 gap-2">
                  <div>
                    <label className="text-sm font-semibold" htmlFor="reffer">
                      Were you referred by a Sales Representative?
                    </label>
                  </div>
                  <div className="sm:col-span-2">
                    <select
                      onChange={handleRefferChange}
                      className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                      name="reffer"
                      id="reffer"
                      defaultValue={"No"}
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-2">
                  <div>
                    <label
                      className="text-sm font-semibold"
                      htmlFor="selectsalesp"
                    >
                      Select Sales Representative
                    </label>
                  </div>
                  <div className="sm:col-span-2">
                    <Select
                      labelId="selectsalesp"
                      value={selectedOption}
                      onChange={handleSelectChange}
                      disabled={!isSelectsalespEnabled}
                      renderValue={(selected) => {
                        const selectedOption = options.find(
                          (option) => option.value === selected
                        );
                        return (
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <img
                              src={selectedOption?.avatar}
                              alt="img"
                              style={{
                                width: "24px",
                                height: "24px",
                                borderRadius: "50%",
                                marginRight: "8px",
                              }}
                            />
                            {selectedOption?.label}
                          </div>
                        );
                      }}
                      sx={{
                        border: "1px solid #D5D7DA !important",
                        borderRadius: "8px",
                        boxShadow: "0px 1px 2px 0px #0A0D120D",
                        outline: "none",
                        width: "100%",
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          border: "1px solid #D5D7DA",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#D5D7DA !important",
                        },
                      }}
                    >
                      {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          <img
                            className="me-2 size-8 rounded-full object-cover"
                            src={option.avatar}
                            alt="img"
                            style={{
                              width: "24px",
                              height: "24px",
                              borderRadius: "50%",
                              marginRight: "8px",
                            }}
                          />
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div>
            <div class="max-w-[70%]">
              <div class="flex gap-4 items-center mb-4">
                <label class="flex items-center ">
                  <input
                    type="radio"
                    name="serviceType"
                    class="form-radio"
                    checked
                  />
                  <span className="ms-3">Service Locations</span>
                </label>
                <label class="flex items-center ">
                  <input type="radio" name="serviceType" class="form-radio" />
                  <span className="ms-3">Service Radius</span>
                </label>
              </div>

              <div class="mb-6 ">
                <label htmlFor="bloc" class="block text-sm font-medium mb-2">
                  Business Location
                </label>
                <div class="flex items-center border py-2 rounded-lg px-3 ">
                <img src={location} alt="" className="max-w-20px me-2"/>
                  <input
                  id="bloc"
                    type="text"
                    placeholder="Enter your business address."
                    class="w-full py-2 focus-none"
                  />
                  <FaPencilAlt />
                </div>
              </div>

              <div class="mb-6">
                <div className="flex justify-between">
                  <label htmlFor="sloc" class="block text-sm font-medium mb-2">
                    Enter Service Locations
                  </label>
                  <div className="flex items-center">
                    <input type="checkbox" name="" id="bulk" className="me-2"/>
                    <label
                      htmlFor="bulk"
                      className="block text-sm font-semibold"
                    >
                      Add locations in bulk
                    </label>
                  </div>
                </div>
                <div class="flex items-center  mb-2">
                  <textarea
                  id="sloc"
                    rows="4"
                    placeholder="Locations can be cities, postal codes, countries, etc. Enter one location per line."
                    class="w-full border rounded-lg px-3 py-2"
                  ></textarea>
                </div>
                <p class="text-sm myblack text-end">0 / 1000</p>
              </div>

              <div class="mb-6 border rounded-lg px-3 text-sm font-medium flex items-center">
                <label class="" htmlFor="restrict">
                  <img src={location} alt="" className="max-w-20px me-2"/>
                </label>
                <input type="text" id="restrict" class="w-full focus-none rounded-lg px-3 py-4" placeholder="Restrict locations within a country (optional)"/>
              </div>
              <div className="border rounded-lg py-3">
                <div className="px-3 py-1 flex items-center justify-between">
                      <p className="myblack">location 01</p>
                      <Link to="#"><img src={close} alt="" /></Link>
                </div>
                <div className="px-3 py-1 flex items-center justify-between">
                      <p className="myblack">location 02</p>
                      <Link to="#"><img src={close} alt="" /></Link>
                </div>
                <div className="px-3 py-1 flex items-center justify-between">
                      <p className="myblack">location 03</p>
                      <Link to="#"><img src={close} alt="" /></Link>
                </div>
              </div>
            </div>
            <div className="col-span-12 mt-4">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509827!2d144.96305781531895!3d-37.816279442021675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727b3f94355567!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1674678878475!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div>
            <div className="flex justify-between border-b border-[#E9EAEB] pb-5 items-center flex-wrap gap-4">
              <div>
                <p className="text-lg font-semibold text-[#181D27]">
                  Business Profile
                </p>
                <p className="text-[#535862] text-sm">
                  update your business details.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-center ms-auto justify-end">
                <button className="text-[#414651] font-semibold text-sm border border-[#D5D7DA] shadow-[0px 1px_2px_0px_#0A0D120D] bg-[#FFFFFF] rounded-[8px] py-3 px-4">
                  Cancel
                </button>
                <button className="text-[#ffffff] font-semibold text-sm border border-[#0F91D2] shadow-[0px 1px_2px_0px_#0A0D120D] bg-[#0F91D2] rounded-[8px] py-3 px-4">
                  Save
                </button>
              </div>
            </div>
            <div>
              <div className="py-8 border-b">
                <div className="grid sm:grid-cols-3 gap-2 max-w-[1000px]">
                  <div>
                    <label className="text-sm font-semibold" htmlFor="bname">
                      Business name*
                    </label>
                  </div>
                  <div className="sm:col-span-2">
                    <input
                      className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                      type="text"
                      name="bname"
                      id="bname"
                    />
                  </div>
                </div>
              </div>
              <div className="py-8 border-b">
                <div className="grid md:grid-cols-3 gap-2 max-w-[1000px]">
                  <div>
                    <p className="text-sm font-semibold text-[#414651]">
                      Your photo
                    </p>
                    <p className="text-[#535862] text-sm">
                      This will be displayed on your profile.
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <SettingsPreview />
                  </div>
                </div>
              </div>
              <div className="py-8 border-b">
                <div className="grid sm:grid-cols-3 gap-2 max-w-[1000px]">
                  <div>
                    <label className="text-sm font-semibold" htmlFor="location">
                      Location
                    </label>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="border flex items-center border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D]">
                      <input
                        className="w-full focus:outline-none"
                        type="text"
                        name="location"
                        id="location"
                      />
                      <label
                        className="bg-[#FAFAFA] rounded-[4px]"
                        htmlFor="location"
                      >
                        <FaPlus />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-8 border-b">
                <div className="grid sm:grid-cols-3 gap-2 max-w-[1000px]">
                  <div>
                    <label className="text-sm font-semibold" htmlFor="About">
                      About
                    </label>
                  </div>
                  <div className="sm:col-span-2">
                    <textarea
                      rows={5}
                      className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                      name="About"
                      id="About"
                      placeholder="Write here.."
                    />
                  </div>
                </div>
              </div>
              <div className="py-8 border-b">
                <div className="grid sm:grid-cols-3 gap-2 max-w-[1000px]">
                  <div>
                    <label
                      className="text-sm font-semibold"
                      htmlFor="PrimaryCat"
                    >
                      Primary Business Category*
                    </label>
                  </div>
                  <div className="sm:col-span-2">
                    <select
                      className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                      name="PrimaryCat"
                      id="PrimaryCat"
                    >
                      <option value="" hidden>
                        Select an option
                      </option>
                      {Businesscategories.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-2 max-w-[1000px] mt-4">
                  <div>
                    <label
                      className="text-sm font-semibold"
                      htmlFor="SecondaryCat"
                    >
                      Secondary Business Categories*
                    </label>
                  </div>
                  <div className="sm:col-span-2">
                    <select
                      className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                      name="SecondaryCat"
                      id="SecondaryCat"
                    >
                      <option value="" hidden>
                        Select an option
                      </option>
                      {Businesscategories.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="py-8">
                <div className="grid sm:grid-cols-3 gap-2 max-w-[1000px]">
                  <div>
                    <label className="text-sm font-semibold" htmlFor="Website">
                      Website
                    </label>
                  </div>
                  <div className="sm:col-span-2">
                    <input
                      className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                      type="text"
                      name="Website"
                      id="Website"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div>
            <div className="flex justify-between border-b border-[#E9EAEB] pb-5 items-center flex-wrap gap-4">
              <div>
                <p className="text-lg font-semibold text-[#181D27]">
                  Certifications & Hours
                </p>
                <p className="text-[#535862] text-sm">
                  update your certifications & hours details.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-center ms-auto justify-end">
                <button className="text-[#414651] font-semibold text-sm border border-[#D5D7DA] shadow-[0px 1px_2px_0px_#0A0D120D] bg-[#FFFFFF] rounded-[8px] py-3 px-4">
                  Cancel
                </button>
                <button className="text-[#ffffff] font-semibold text-sm border border-[#0F91D2] shadow-[0px 1px_2px_0px_#0A0D120D] bg-[#0F91D2] rounded-[8px] py-3 px-4">
                  Save
                </button>
              </div>
            </div>
            <div className="py-8 border-b">
              <div className="grid md:grid-cols-3 gap-2 max-w-[1000px]">
                <div>
                  <p className="text-sm font-semibold text-[#414651]">
                    Upload Insurance Certificate
                  </p>
                </div>
                <div className="md:col-span-2">
                  <SettingsPreview />
                </div>
              </div>
            </div>
            <div className="py-8 border-b">
              <div className="grid md:grid-cols-3 gap-2 max-w-[1000px]">
                <div>
                  <p className="text-sm font-semibold text-[#414651]">
                    Upload Licensing Certificate
                  </p>
                </div>
                <div className="md:col-span-2">
                  <SettingsPreview />
                </div>
              </div>
            </div>
            <div className="py-8 border-b">
              <div className="grid md:grid-cols-3 gap-2 max-w-[1000px]">
                <div>
                  <p className="text-sm font-semibold text-[#414651]">
                    Upload Awards Certificate
                  </p>
                </div>
                <div className="md:col-span-2">
                  <SettingsPreview />
                </div>
              </div>
            </div>
            <div className="py-8 border-b">
              <div className="grid sm:grid-cols-3 gap-2 max-w-[1000px]">
                <div>
                  <p className="text-sm font-semibold">
                    Regular Hours of Operation
                  </p>
                </div>
                <div className="sm:col-span-2">
                  <div>
                    <select
                      className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                      name=""
                      id=""
                    >
                      <option value="" hidden>
                        Select days
                      </option>
                      <option value="">Monday</option>
                      <option value="">Tuesday</option>
                      <option value="">Wednesday</option>
                      <option value="">Thursday</option>
                      <option value="">Friday</option>
                      <option value="">Saturday</option>
                      <option value="">Sunday</option>
                    </select>
                  </div>
                  <div className="grid md:grid-cols-2 mt-4 gap-4">
                    <div>
                      <input
                        className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                        type="text"
                        name=""
                        id=""
                        placeholder="Start Time"
                      />
                    </div>
                    <div>
                      <input
                        className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                        type="text"
                        name=""
                        id=""
                        placeholder="End Time"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-8 border-b">
              <div className="grid sm:grid-cols-3 gap-2 max-w-[1000px]">
                <div>
                  <p className="text-sm font-semibold">
                    Special Hours of Operation
                  </p>
                </div>
                <div className="sm:col-span-2">
                  <div>
                    <select
                      className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                      name=""
                      id=""
                    >
                      <option value="" hidden>
                        Select days
                      </option>
                      <option value="">Monday</option>
                      <option value="">Tuesday</option>
                      <option value="">Wednesday</option>
                      <option value="">Thursday</option>
                      <option value="">Friday</option>
                      <option value="">Saturday</option>
                      <option value="">Sunday</option>
                    </select>
                  </div>
                  <div className="grid md:grid-cols-2 mt-4 gap-4">
                    <div>
                      <input
                        className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                        type="text"
                        name=""
                        id=""
                        placeholder="Start Time"
                      />
                    </div>
                    <div>
                      <input
                        className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                        type="text"
                        name=""
                        id=""
                        placeholder="End Time"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <div>
            <div className="flex flex-col lg:flex-row items-center border-b pb-4 justify-between mt-4">
              <div className="">
                <h2 className="font-bold text-xl myhead">
                  Payment/Payout Info
                </h2>
                <p className="myblack">update your payment details</p>
              </div>
              <div className="flex justify-end mt-3 lg:mt-0">
                <button
                  type="reset"
                  className="border border-[#cdcdcd] rounded-lg w-[100px] sm:w-[150px] py-[10px] me-4 font-semibold bg-[#ffffff]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="border border-[#0F91D2] rounded-lg w-[100px] sm:w-[150px] py-[10px] text-[#ffffff] font-semibold bg-[#0F91D2]"
                >
                  Save
                </button>
              </div>
            </div>
            <div className="">
              <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12">
                <div className="col-span-12 md:col-span-4 lg:col-span-3">
                  <div className="flex">
                    <label htmlFor="Title" className="font-semibold">
                      Service Title
                    </label>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-8 lg:col-span-6">
                  <input
                    type="text"
                    id="Title"
                    placeholder="Muhammad Hussnain"
                    className="myinput focus-none w-full"
                  />
                </div>
              </div>
              <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12">
                <div className="col-span-12 md:col-span-4 lg:col-span-3">
                  <div className="flex">
                    <label htmlFor="Title" className="font-semibold">
                      Select Bank*
                    </label>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-8 lg:col-span-6">
                  <select id="Bank" className="myinput focus-none w-full">
                    <option value="" disabled selected hidden>
                      Select a bank
                    </option>
                    <option value="bank1">Bank 1</option>
                    <option value="bank2">Bank 2</option>
                    <option value="bank3">Bank 3</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
              </div>
              <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12">
                <div className="col-span-12 md:col-span-4 lg:col-span-3">
                  <div className="flex">
                    <label htmlFor="Title" className="font-semibold">
                      Branch Name/Code
                    </label>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-8 lg:col-span-6">
                  <input
                    type="text"
                    id="Title"
                    placeholder="Enter"
                    className="myinput focus-none w-full"
                  />
                </div>
              </div>
              <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12">
                <div className="col-span-12 md:col-span-4 lg:col-span-3">
                  <div className="flex">
                    <label htmlFor="Title" className="font-semibold">
                      Account Number*
                    </label>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-8 lg:col-span-6">
                  <input
                    type="text"
                    id="Title"
                    placeholder="Enter here..."
                    className="myinput focus-none w-full"
                  />
                </div>
              </div>
              <div className="grid py-4 grid-cols-1 md:grid-cols-12">
                <div className="col-span-12 md:col-span-4 lg:col-span-3">
                  <div className="flex">
                    <label htmlFor="Title" className="font-semibold">
                      Bank Routing Number*
                    </label>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-8 lg:col-span-6">
                  <input
                    type="text"
                    id="Title"
                    placeholder="Enter here..."
                    className="myinput focus-none w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <div>
            <div className="flex justify-between border-b border-[#E9EAEB] pb-5 items-center flex-wrap gap-4">
              <div>
                <p className="text-lg font-semibold text-[#181D27]">
                  Additional Photos
                </p>
                <p className="text-[#535862] text-sm">
                  upload additional photos.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-center ms-auto justify-end">
                <button className="text-[#414651] font-semibold text-sm border border-[#D5D7DA] shadow-[0px 1px_2px_0px_#0A0D120D] bg-[#FFFFFF] rounded-[8px] py-3 px-4">
                  Cancel
                </button>
                <button className="text-[#ffffff] font-semibold text-sm border border-[#0F91D2] shadow-[0px 1px_2px_0px_#0A0D120D] bg-[#0F91D2] rounded-[8px] py-3 px-4">
                  Save
                </button>
              </div>
            </div>
            <div className="py-8 border-b">
              <div className="grid md:grid-cols-3 gap-2 max-w-[1000px]">
                <div>
                  <p className="text-sm font-semibold text-[#414651]">
                    Upload Technician Photos
                  </p>
                </div>
                <div className="md:col-span-2">
                  <SettingsPreview />
                </div>
              </div>
            </div>
            <div className="py-8 border-b">
              <div className="grid md:grid-cols-3 gap-2 max-w-[1000px]">
                <div>
                  <p className="text-sm font-semibold text-[#414651]">
                    Upload Vehicle Photos
                  </p>
                </div>
                <div className="md:col-span-2">
                  <SettingsPreview />
                </div>
              </div>
            </div>
            <div className="py-8 border-b">
              <div className="grid md:grid-cols-3 gap-2 max-w-[1000px]">
                <div>
                  <p className="text-sm font-semibold text-[#414651]">
                    Upload Facility Photos
                  </p>
                </div>
                <div className="md:col-span-2">
                  <SettingsPreview />
                </div>
              </div>
            </div>
            <div className="py-8 border-b">
              <div className="grid md:grid-cols-3 gap-2 max-w-[1000px]">
                <div>
                  <p className="text-sm font-semibold text-[#414651]">
                    Upload Project Photos
                  </p>
                </div>
                <div className="md:col-span-2">
                  <SettingsPreview />
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={6}>
          <div>
            <div className="flex justify-between border-b border-[#E9EAEB] pb-5 items-center flex-wrap gap-4">
              <div>
                <p className="text-lg font-semibold text-[#181D27]">
                  Additional Photos
                </p>
                <p className="text-[#535862] text-sm">
                  upload additional photos.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-center ms-auto justify-end">
                <button className="text-[#414651] font-semibold text-sm border border-[#D5D7DA] shadow-[0px 1px_2px_0px_#0A0D120D] bg-[#FFFFFF] rounded-[8px] py-3 px-4">
                  Cancel
                </button>
                <button className="text-[#ffffff] font-semibold text-sm border border-[#0F91D2] shadow-[0px 1px_2px_0px_#0A0D120D] bg-[#0F91D2] rounded-[8px] py-3 px-4">
                  Save
                </button>
              </div>
            </div>
            <div>
              {socialLinks.map((social, index) => (
                <div key={index} className="py-5 border-b border-[#E9EAEB]">
                  <div className="flex items-center justify-between py-3 px-4 bg-[#FAFAFA] min-h-[60px] rounded-[8px]">
                    <div className="flex gap-3 items-center">
                      <img
                        className="size-6 max-w-6"
                        src={social.avatar}
                        alt=""
                      />
                      <div>
                        <p className="font-medium text-[#343434]">
                          {social.name}
                        </p>
                        {social.link && (
                          <p className="text-[#535862] text-sm">
                            {social.link}
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      {social.link ? (
                        <CiTrash className="text-[24px]" />
                      ) : (
                        <button className="text-white text-sm font-semibold bg-[#0F91D2] border border-[#0F91D2] rounded-[8px] shadow-[0px_1px_2px_0px_#0A0D120D] py-3 px-4">
                          Connect
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={7}>
          <div>
            <div className="flex flex-col lg:flex-row items-center border-b pb-4 justify-between mt-4">
              <div className="">
                <h2 className="font-bold text-xl myhead">Password</h2>
                <p className="myblack">update your account password</p>
              </div>
              <div className="flex justify-end mt-3 lg:mt-0">
                <button
                  type="reset"
                  className="border border-[#cdcdcd] rounded-lg w-[100px] sm:w-[150px] py-[10px] me-4 font-semibold bg-[#ffffff]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="border border-[#0F91D2] rounded-lg w-[100px] sm:w-[150px] py-[10px] text-[#ffffff] font-semibold bg-[#0F91D2]"
                >
                  Save
                </button>
              </div>
            </div>
            <div className="">
              <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12">
                <div className="col-span-12 md:col-span-4 lg:col-span-3">
                  <div className="flex">
                    <label htmlFor="password" className="font-semibold">
                      Current Password
                    </label>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-8 lg:col-span-6">
                  <input
                    type="password"
                    id="password"
                    placeholder=""
                    className="myinput focus-none w-full"
                  />
                </div>
              </div>
              <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12">
                <div className="col-span-12 md:col-span-4 lg:col-span-3">
                  <div className="flex">
                    <label htmlFor="confirmpassword" className="font-semibold">
                      New Password
                    </label>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-8 lg:col-span-6">
                  <input
                    type="password"
                    id="confirmpassword"
                    placeholder=""
                    className="myinput focus-none w-full"
                  />
                </div>
              </div>
              <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12">
                <div className="col-span-12 md:col-span-4 lg:col-span-3">
                  <div className="flex">
                    <label
                      htmlFor="confirmnewpassword"
                      className="font-semibold"
                    >
                      Confirm New Password
                    </label>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-8 lg:col-span-6">
                  <input
                    type="password"
                    id="confirmnewpassword"
                    placeholder=""
                    className="myinput focus-none w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={8}>
          <div>
            <div className="flex flex-col lg:flex-row items-center border-b pb-4 justify-between mt-4">
              <div className="">
                <h2 className="font-bold text-xl myhead">
                  Channels for Conversations
                </h2>
                <p className="myblack">Update your Channels details.</p>
              </div>
              <div className="flex justify-end mt-3 lg:mt-0">
                <button
                  type="reset"
                  className="border border-[#cdcdcd] rounded-lg w-[100px] sm:w-[150px] py-[10px] me-4 font-semibold bg-[#ffffff]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="border border-[#0F91D2] rounded-lg w-[100px] sm:w-[150px] py-[10px] text-[#ffffff] font-semibold bg-[#0F91D2]"
                >
                  Save
                </button>
              </div>
            </div>
            <div className="">
              <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-6 2xl:col-span-5">
                  <div className="flex items-center">
                    <p className="font-semibold me-2">Call Pro</p>
                    <label class="switch def-switch">
                      <input type="checkbox" checked />
                      <span class="slider round"></span>
                    </label>
                  </div>
                  <p className="mt-3">
                    Enable the toggle to make your phone number visible to the
                    public. Each time a customer (only one time per customer)
                    uses this channel will incur a charge of $xxx. This charge
                    is waived if your average deal revenue is above $xxx for the
                    past 60 day period.
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-6 2xl:col-span-6">
                  <input
                    type="text"
                    id="Title"
                    placeholder="Enter contact here"
                    className="myinput focus-none w-full"
                  />
                </div>
              </div>
              <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-6 2xl:col-span-5">
                  <div className="flex items-center">
                    <p className="font-semibold me-2">Call Pro</p>
                    <label class="switch def-switch">
                      <input type="checkbox" checked />
                      <span class="slider round"></span>
                    </label>
                  </div>
                  <p className="mt-3">
                    Enable the toggle to make your phone number visible to the
                    public. Each time a customer (only one time per customer)
                    uses this channel will incur a charge of $xxx. This charge
                    is waived if your average deal revenue is above $xxx for the
                    past 60 day period.
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-6 2xl:col-span-6">
                  <input
                    type="text"
                    id="Title"
                    placeholder="Enter contact here"
                    className="myinput focus-none w-full"
                  />
                </div>
              </div>
              <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-6 2xl:col-span-5">
                  <div className="flex items-center">
                    <p className="font-semibold me-2">Text Pro</p>
                    <label class="switch def-switch">
                      <input type="checkbox" checked />
                      <span class="slider round"></span>
                    </label>
                  </div>
                  <p className="mt-3">
                    Enable the toggle to make your text number visible to the
                    public. Each time a customer (only one time per customer)
                    uses this channel will incur a charge of $xxx. This charge
                    is waived if your average deal revenue is above $xxx for the
                    past 60 day period.
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-6 2xl:col-span-6">
                  <input
                    type="text"
                    id="Title"
                    placeholder="Enter contact here"
                    className="myinput focus-none w-full"
                  />
                </div>
              </div>
              <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-6 2xl:col-span-5">
                  <div className="flex items-center">
                    <p className="font-semibold me-2">Instant Chat</p>
                    <label class="switch def-switch">
                      <input type="checkbox" checked />
                      <span class="slider round"></span>
                    </label>
                  </div>
                  <p className="mt-3">
                    Enable the toggle to make your instant chat visible to the
                    public. Each time a customer (only one time per customer)
                    uses this channel will incur a charge of $xxx. This charge
                    is waived if your average deal revenue is above $xxx for the
                    past 60 day period.
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-6 2xl:col-span-6">
                  <input
                    type="text"
                    id="Title"
                    placeholder="Enter contact here"
                    className="myinput focus-none w-full"
                  />
                </div>
              </div>
              <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-6 2xl:col-span-5">
                  <div className="flex items-center">
                    <p className="font-semibold me-2">Email Pro</p>
                    <label class="switch def-switch">
                      <input type="checkbox" checked />
                      <span class="slider round"></span>
                    </label>
                  </div>
                  <p className="mt-3">
                    Enable the toggle to make your email address visible to the
                    public. Each time a customer (only one time per customer)
                    uses this channel will incur a charge of $xxx. This charge
                    is waived if your average deal revenue is above $xxx for the
                    past 60 day period.
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-6 2xl:col-span-6">
                  <input
                    type="text"
                    id="Title"
                    placeholder="Enter email here"
                    className="myinput focus-none w-full"
                  />
                </div>
              </div>
              <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-6 2xl:col-span-5">
                  <div className="flex items-center">
                    <p className="font-semibold me-2">Direct Form</p>
                    <label class="switch def-switch">
                      <input type="checkbox" checked />
                      <span class="slider round"></span>
                    </label>
                  </div>
                  <p className="mt-3">
                    Enable the toggle to make your direct form visible to the
                    public. Each time a customer (only one time per customer)
                    uses this channel will incur a charge of $xxx. This charge
                    is waived if your average deal revenue is above $xxx for the
                    past 60 day period.
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-6 2xl:col-span-6">
                  <input
                    type="text"
                    id="Title"
                    placeholder="Enter email here"
                    className="myinput focus-none w-full"
                  />
                </div>
              </div>
              <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-6 2xl:col-span-5">
                  <div className="flex items-center">
                    <p className="font-semibold me-2">Address</p>
                    <label class="switch def-switch">
                      <input type="checkbox" checked />
                      <span class="slider round"></span>
                    </label>
                  </div>
                  <p className="mt-3">
                    Enable the toggle to make your address visible to the
                    public.
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-6 2xl:col-span-6">
                  <input
                    type="text"
                    id="Title"
                    placeholder="Enter contact here"
                    className="myinput focus-none w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </Box>
    </div>
  );
}

export default Settings;
