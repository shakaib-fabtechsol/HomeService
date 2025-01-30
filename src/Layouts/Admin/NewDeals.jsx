import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import upload from "../../assets/img/upload.png";
import fileicon from "../../assets/img/fileicon.png";
import { HiOutlineTrash } from "react-icons/hi2";
import down from "../../assets/img/chevronDown.png";

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
      {value === index && (
        <Box sx={{ py: 3, fontFamily: "inter" }}>{children}</Box>
      )}
    </div>
  );
}

function NewDeals() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [selectedRate, setSelectedRate] = useState("Flat"); // State to track selected pricing model

  const handleRateChange = (event) => {
    setSelectedRate(event.target.value); // Update state based on selected radio button
  };
  const [file, setFile] = useState(null); // Stores the uploaded file
  const [filePreview, setFilePreview] = useState(null); // Stores the file preview URL
  const [showPreview, setShowPreview] = useState(false); // Toggles the preview display

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setFilePreview(URL.createObjectURL(uploadedFile)); // Generate a preview URL
      setShowPreview(false); // Reset preview display
    }
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const uploadedFile = e.dataTransfer.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setFilePreview(URL.createObjectURL(uploadedFile)); // Generate a preview URL
      setShowPreview(false); // Reset preview display
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setFilePreview(null);
    setShowPreview(false);
  };

  const handleShowPreview = () => {
    setShowPreview(true);
  };
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
  return (
    <div>
      <div className="flex items-center">
        <Link to="/services">
          <FaArrowLeft className="me-4 text-xl" />
        </Link>
        <h2 className="text-2xl font-semibold">Create New Deal</h2>
      </div>
      <p className="text-[#535862] mt-4 ms-8">
        Create, manage, and organize your deals effortlessly.
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
            scrollButtons="auto" // Shows scroll buttons only when needed
          >
            <Tab label="Basic Info" />
            <Tab label="Pricing & Packages" />
            <Tab label="Media Uploads" />
            <Tab label="Review & Publish" />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <form action="#">
            <div className="grid grid-cols-12">
              <div className="col-span-12 lg:col-span-7 mt-4">
                <div className="flex flex-col">
                  <label htmlFor="Title" className="font-semibold">
                    Service Title
                  </label>
                  <input
                    type="text"
                    id="Title"
                    placeholder="Enter service name"
                    className="myinput focus-none"
                  />
                </div>
              </div>
              <div className="col-span-12 lg:col-span-7 mt-4">
                <p className="font-semibold">Service Type</p>
                <div className="flex mt-4">
                  <div className="flex">
                    <input
                      type="checkbox"
                      id="Commercial"
                      name="Commercial"
                      className="myinput me-4"
                    />
                    <label htmlFor="Commercial">Commercial</label>
                  </div>
                  <div className="flex ms-8">
                    <input
                      type="checkbox"
                      id="Residential"
                      name="Residential"
                      className="myinput me-4"
                    />
                    <label htmlFor="Residential">Residential</label>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-7 mt-4">
                <div className="flex flex-col">
                  <label htmlFor="Category" className="font-semibold">
                    Service Category
                  </label>
                  <select
                    name=""
                    id="Category"
                    className="myselect pe-[30px] focus-none"
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
              <div className="col-span-12 lg:col-span-7 mt-4">
                <div className="flex flex-col">
                  <label htmlFor="Tags" className="font-semibold">
                    Search Tags
                  </label>
                  <input
                    type="text"
                    id="Tags"
                    placeholder="Enter Tag"
                    className="myinput focus-none"
                  />
                </div>
              </div>
              <div className="col-span-12 mt-4">
                <div className="flex flex-col">
                  <label htmlFor="Description" className="font-semibold">
                    Service Description
                  </label>
                  <textarea
                    name="Description"
                    id="Description"
                    className="myinput focus-none"
                    rows={6}
                  ></textarea>
                </div>
              </div>
              <div className="col-span-12 mt-4">
                <div className="flex flex-col">
                  <label htmlFor="Description" className="font-semibold">
                    Fine Print{" "}
                    <span className="text-[13px] text-[#cdcdcd]">
                      (Optional)
                    </span>
                  </label>
                  <textarea
                    name="Description"
                    id="Description"
                    className="myinput focus-none"
                    rows={6}
                  ></textarea>
                </div>
              </div>
              <div className="col-span-12 mt-4">
                <div className="flex justify-end">
                  <button
                    type="reset"
                    className="border border-[#cdcdcd] rounded-lg w-[150px] py-[10px] me-4 font-semibold bg-[#ffffff]"
                  >
                    {" "}
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="border border-[#0F91D2] rounded-lg w-[150px] py-[10px] text-[#ffffff] font-semibold bg-[#0F91D2]"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <form>
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-10 mt-4">
                <p className="font-semibold">Pricing Model</p>
                <div className="flex flex-wrap justify-between mt-4">
                  <div className="flex me-8">
                    <input
                      type="radio"
                      id="Flat"
                      name="Rate"
                      value="Flat"
                      className="myinput me-4"
                      onChange={handleRateChange}
                      checked={selectedRate === "Flat"}
                    />
                    <label htmlFor="Flat">Flat Rate</label>
                  </div>
                  <div className="flex me-8">
                    <input
                      type="radio"
                      id="Hourly"
                      name="Rate"
                      value="Hourly"
                      className="myinput me-4"
                      onChange={handleRateChange}
                      checked={selectedRate === "Hourly"}
                    />
                    <label htmlFor="Hourly">Hourly Rate</label>
                  </div>
                  <div className="flex me-8">
                    <input
                      type="radio"
                      id="Custom"
                      name="Rate"
                      value="Custom"
                      className="myinput me-4"
                      onChange={handleRateChange}
                      checked={selectedRate === "Custom"}
                    />
                    <label htmlFor="Custom">Custom Package</label>
                  </div>
                </div>
              </div>

              {/* Flat Rate Fields */}
              {selectedRate === "Flat" && (
                <>
                  <div className="col-span-12 lg:col-span-7 mt-4">
                    <div className="flex flex-col">
                      <label htmlFor="Flatr" className="font-semibold">
                        Flat Rate Price
                      </label>
                      <input
                        type="text"
                        id="Flatr"
                        placeholder="$100"
                        className="myinput focus-none"
                      />
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-7 mt-4">
                    <div className="flex flex-col">
                      <label htmlFor="BuyNow" className="font-semibold">
                        Buy Now Discount
                      </label>
                      <input
                        type="text"
                        id="BuyNow"
                        placeholder="10 %"
                        className="myinput focus-none"
                      />
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-7 mt-4">
                    <div className="flex flex-col">
                      <label htmlFor="Finalp" className="font-semibold">
                        Final List Price
                      </label>
                      <input
                        type="text"
                        id="Finalp"
                        placeholder="10 %"
                        className="myinput focus-none"
                      />
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-7 mt-4">
                    <div className="flex flex-col">
                      <label htmlFor="Estimated" className="font-semibold">
                        Estimated Service Time
                      </label>
                      <input
                        type="text"
                        id="Estimated"
                        placeholder="01 Day"
                        className="myinput focus-none"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Hourly Rate Fields */}
              {selectedRate === "Hourly" && (
                <>
                  <div className="col-span-12 lg:col-span-7 mt-4">
                    <div className="flex flex-col">
                      <label htmlFor="Hourlyr" className="font-semibold">
                        Hourly Rate
                      </label>
                      <input
                        type="text"
                        id="Hourlyr"
                        placeholder="$25/hour"
                        className="myinput focus-none"
                      />
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-7 mt-4">
                    <div className="flex flex-col">
                      <label htmlFor="Discount" className="font-semibold">
                        Discount
                      </label>
                      <input
                        type="text"
                        id="Discount"
                        placeholder="10 %"
                        className="myinput focus-none"
                      />
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-7 mt-4">
                    <div className="flex flex-col">
                      <label htmlFor="Final" className="font-semibold">
                        Final List Price
                      </label>
                      <input
                        type="text"
                        id="Final"
                        placeholder="USD: 40"
                        className="myinput focus-none"
                      />
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-7 mt-4">
                    <div className="flex flex-col">
                      <label htmlFor="Estimated" className="font-semibold">
                        Estimated Service Time
                      </label>
                      <input
                        type="text"
                        id="Estimated"
                        placeholder="2 Hours"
                        className="myinput focus-none"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Custom Package Fields */}
              {selectedRate === "Custom" && (
                <>
                  <div className="col-span-12 mt-6">
                    <p className="text-lg font-semibold">Pricing Packages</p>
                    <div className="bg-[#FAFAFA] rounded-[12px] p-5 mt-6">
                      <div>
                        <div className="grid lg:grid-cols-3 gap-5">
                          <div>
                            <div className="flex justify-between items-center">
                              <p className="text-lg font-medium">Tier 1</p>
                              <HiOutlineTrash className="text-[20px]" />
                            </div>
                            <div className="flex flex-col mt-4">
                              <label
                                className="text-sm font-medium ps-2"
                                htmlFor="tier1Title"
                              >
                                Title
                              </label>
                              <input
                                className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                                type="text"
                                placeholder="Title"
                                id="tier1Title"
                              />
                            </div>
                            <div className="flex flex-col mt-4">
                              <label
                                className="text-sm font-medium ps-2"
                                htmlFor="tier1Deliverables"
                              >
                                Deliverables
                              </label>
                              <textarea
                                className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                                name="tier1Deliverables"
                                id="tier1Deliverables"
                                placeholder="Write here.."
                              ></textarea>
                            </div>
                            <div className="flex flex-col mt-4">
                              <label
                                className="text-sm font-medium ps-2"
                                htmlFor="tier1Price"
                              >
                                Price
                              </label>
                              <input
                                className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                                type="text"
                                placeholder="$50"
                                id="tier1Price"
                              />
                            </div>
                            <div className="flex flex-col mt-4">
                              <label
                                className="text-sm font-medium ps-2"
                                htmlFor="tier1BuyNowDiscount"
                              >
                                Buy Now Discount
                              </label>
                              <input
                                className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                                type="text"
                                placeholder="10 %"
                                id="tier1BuyNowDiscount"
                              />
                            </div>
                            <div className="flex flex-col mt-4">
                              <label
                                className="text-sm font-medium ps-2"
                                htmlFor="tier1FinalListPrice"
                              >
                                Final List Price
                              </label>
                              <input
                                className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                                type="text"
                                placeholder="USD: 43"
                                id="tier1FinalListPrice"
                              />
                            </div>
                            <div className="flex flex-col mt-4">
                              <label
                                className="text-sm font-medium ps-2"
                                htmlFor="tier2EstimatedTiming"
                              >
                                Estimated Service Timing
                              </label>
                              <select
                                style={{
                                  backgroundImage: `url(${down})`,
                                  backgroundPosition:
                                    "calc(100% - 10px) center",
                                  backgroundRepeat: "no-repeat",
                                }}
                                className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none appearance-none"
                                name="tier2EstimatedTiming"
                                id="tier2EstimatedTiming"
                              >
                                <option value="">1 Day</option>
                                <option value="">2 Day</option>
                                <option value="">3 Day</option>
                                <option value="">4 Day</option>
                              </select>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between items-center">
                              <p className="text-lg font-medium">Tier 2</p>
                              <HiOutlineTrash className="text-[20px]" />
                            </div>
                            <div className="flex flex-col mt-4">
                              <label
                                className="text-sm font-medium ps-2"
                                htmlFor="tier2Title"
                              >
                                Title
                              </label>
                              <input
                                className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                                type="text"
                                placeholder="Title"
                                id="tier2Title"
                              />
                            </div>
                            <div className="flex flex-col mt-4">
                              <label
                                className="text-sm font-medium ps-2"
                                htmlFor="tier2Deliverables"
                              >
                                Deliverables
                              </label>
                              <textarea
                                className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                                name="tier2Deliverables"
                                id="tier2Deliverables"
                                placeholder="Write here.."
                              ></textarea>
                            </div>
                            <div className="flex flex-col mt-4">
                              <label
                                className="text-sm font-medium ps-2"
                                htmlFor="tier2Price"
                              >
                                Price
                              </label>
                              <input
                                className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                                type="text"
                                placeholder="$50"
                                id="tier2Price"
                              />
                            </div>
                            <div className="flex flex-col mt-4">
                              <label
                                className="text-sm font-medium ps-2"
                                htmlFor="tier2BuyNowDiscount"
                              >
                                Buy Now Discount
                              </label>
                              <input
                                className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                                type="text"
                                placeholder="10 %"
                                id="tier2BuyNowDiscount"
                              />
                            </div>
                            <div className="flex flex-col mt-4">
                              <label
                                className="text-sm font-medium ps-2"
                                htmlFor="tier2FinalListPrice"
                              >
                                Final List Price
                              </label>
                              <input
                                className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                                type="text"
                                placeholder="USD: 43"
                                id="tier2FinalListPrice"
                              />
                            </div>
                            <div className="flex flex-col mt-4">
                              <label
                                className="text-sm font-medium ps-2"
                                htmlFor="tier2EstimatedTiming"
                              >
                                Estimated Service Timing
                              </label>
                              <select
                                style={{
                                  backgroundImage: `url(${down})`,
                                  backgroundPosition:
                                    "calc(100% - 10px) center",
                                  backgroundRepeat: "no-repeat",
                                }}
                                className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none appearance-none"
                                name="tier2EstimatedTiming"
                                id="tier2EstimatedTiming"
                              >
                                <option value="">1 Day</option>
                                <option value="">2 Day</option>
                                <option value="">3 Day</option>
                                <option value="">4 Day</option>
                              </select>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between items-center">
                              <p className="text-lg font-medium">Tier 3</p>
                              <HiOutlineTrash className="text-[20px]" />
                            </div>
                            <div className="flex flex-col mt-4">
                              <label
                                className="text-sm font-medium ps-2"
                                htmlFor="tier3Title"
                              >
                                Title
                              </label>
                              <input
                                className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                                type="text"
                                placeholder="Title"
                                id="tier3Title"
                              />
                            </div>
                            <div className="flex flex-col mt-4">
                              <label
                                className="text-sm font-medium ps-2"
                                htmlFor="tier3Deliverables"
                              >
                                Deliverables
                              </label>
                              <textarea
                                className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                                name="tier3Deliverables"
                                id="tier3Deliverables"
                                placeholder="Write here.."
                              ></textarea>
                            </div>
                            <div className="flex flex-col mt-4">
                              <label
                                className="text-sm font-medium ps-2"
                                htmlFor="tier3Price"
                              >
                                Price
                              </label>
                              <input
                                className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                                type="text"
                                placeholder="$50"
                                id="tier3Price"
                              />
                            </div>
                            <div className="flex flex-col mt-4">
                              <label
                                className="text-sm font-medium ps-2"
                                htmlFor="tier3BuyNowDiscount"
                              >
                                Buy Now Discount
                              </label>
                              <input
                                className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                                type="text"
                                placeholder="10 %"
                                id="tier3BuyNowDiscount"
                              />
                            </div>
                            <div className="flex flex-col mt-4">
                              <label
                                className="text-sm font-medium ps-2"
                                htmlFor="tier3FinalListPrice"
                              >
                                Final List Price
                              </label>
                              <input
                                className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none"
                                type="text"
                                placeholder="USD: 43"
                                id="tier3FinalListPrice"
                              />
                            </div>
                            <div className="flex flex-col mt-4">
                              <label
                                className="text-sm font-medium ps-2"
                                htmlFor="tier3EstimatedTiming"
                              >
                                Estimated Service Timing
                              </label>
                              <select
                                style={{
                                  backgroundImage: `url(${down})`,
                                  backgroundPosition:
                                    "calc(100% - 10px) center",
                                  backgroundRepeat: "no-repeat",
                                }}
                                className="shadow-[0px_1px_2px_0px_#1018280D] py-2 mt-1 px-3 bg-white border border-[#D0D5DD] rounded-[8px] focus:outline-none appearance-none"
                                name="tier3EstimatedTiming"
                                id="tier3EstimatedTiming"
                              >
                                <option value="">1 Day</option>
                                <option value="">2 Day</option>
                                <option value="">3 Day</option>
                                <option value="">4 Day</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              <div className="col-span-12 mt-4">
                <div className="flex justify-end">
                  <button
                    type="reset"
                    className="border border-[#cdcdcd] rounded-lg w-[150px] py-[10px] me-4 font-semibold bg-[#ffffff]"
                    onClick={() => setSelectedRate("")}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="border border-[#0F91D2] rounded-lg w-[150px] py-[10px] text-[#ffffff] font-semibold bg-[#0F91D2]"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <form action="#">
            <div className="file-upload-container">
              {/* Upload Box */}
              <div
                className="upload-box w-full border border-solid border-1 border-[#cdcdcd] rounded-lg p-4 text-center cursor-pointer"
                onDrop={handleFileDrop}
                onDragOver={(e) => e.preventDefault()}
                onClick={() => document.getElementById("fileInput").click()}
              >
                {file ? (
                  <div className="upload-placeholder flex flex-col items-center justify-center h-[250px]">
                    <img src={upload} alt="upload" className="w-[50px] mb-4" />
                    <p className="text-gray-500">
                      <strong>File Uploaded Successfully</strong>
                    </p>
                    <p className="text-gray-500">
                      <strong>Click to upload</strong> or drag and drop to
                      change image
                    </p>
                    <p className="text-sm text-gray-400">
                      SVG, PNG, or JPG (max. 800×400px)
                    </p>
                  </div>
                ) : (
                  <div className="upload-placeholder flex flex-col items-center justify-center h-[250px]">
                    <img src={upload} alt="upload" className="w-[50px] mb-4" />
                    <p className="text-gray-500">
                      <strong>Click to upload</strong> or drag and drop
                    </p>
                    <p className="text-sm text-gray-400">
                      SVG, PNG, or JPG (max. 800×400px)
                    </p>
                  </div>
                )}
                <input
                  type="file"
                  id="fileInput"
                  accept=".svg, .png, .jpg"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>

              {/* File Details and Actions */}
              {file && (
                <div className="file-actions mt-4">
                  <div className="file-info flex items-center justify-between border rounded-lg p-2">
                    <div className="flex items-center">
                      <img src={fileicon} alt="fileicon" className="w-[20px]" />
                      <div className="file-details ml-2">
                        <p className="file-name text-sm font-medium">
                          {file.name}
                        </p>
                      </div>
                      <p
                        className="show-preview text-[#0F91D2] mt-2 ms-8 cursor-pointer"
                        onClick={handleShowPreview}
                      >
                        Show Preview
                      </p>
                    </div>
                    <div className="flex px-4">
                      <p className="file-size text-xs me-2 text-gray-500">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                      <button
                        className="remove-file text-red-500 font-bold text-xs"
                        onClick={handleRemoveFile}
                      >
                        ✖
                      </button>
                    </div>
                  </div>

                  {/* Show Preview Button */}
                </div>
              )}

              {/* Image Preview */}
              {showPreview && filePreview && (
                <div className="image-preview mt-4">
                  <img
                    src={filePreview}
                    alt="Preview"
                    className="rounded-lg border border-gray-200 w-[200px]"
                  />
                </div>
              )}
            </div>
            <div>
              <div className="col-span-12 mt-4">
                <div className="flex justify-end">
                  <button
                    type="reset"
                    className="border border-[#cdcdcd] rounded-lg w-[150px] py-[10px] me-4 font-semibold bg-[#ffffff]"
                    onClick={() => setSelectedRate("")}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="border border-[#0F91D2] rounded-lg w-[150px] py-[10px] text-[#ffffff] font-semibold bg-[#0F91D2]"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <form action="#">
            <div className="grid grid-cols-12">
              <div className="col-span-12 mt-4">
                <div className="flex flex-col">
                  <label htmlFor="Title" className="font-semibold">
                    Service Title
                  </label>
                  <p>Service Name</p>
                </div>
              </div>
              <div className="col-span-12 mt-4">
                <p className="font-semibold">Service Type</p>
                <p>Residential</p>
              </div>
              <div className="col-span-12 mt-4">
                <p className="font-semibold">Service Category</p>
                <p>Selected Category</p>
              </div>
              <div className="col-span-12 mt-4">
                <p className="font-semibold">Search Tags</p>
                <div className="flex flex-wrap mt-2">
                  <span className="bg-[#E7F4FB] my-2 text-[#0F91D2] px-8 py-2 font-semibold rounded-full me-4">
                    Cleaning
                  </span>
                  <span className="bg-[#E7F4FB] my-2 text-[#0F91D2] px-8 py-2 font-semibold rounded-full me-4">
                    Residential
                  </span>
                  <span className="bg-[#E7F4FB] my-2 text-[#0F91D2] px-8 py-2 font-semibold rounded-full me-4">
                    Appartment
                  </span>
                </div>
              </div>
              <div className="col-span-12 mt-4">
                <div className="flex flex-col">
                  <p className="font-semibold">Service Description</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque quis accumsan turpis. Phasellus tincidunt neque
                    sed nunc mattis molestie. Praesent auctor metus sit amet
                    elit finibus, ac sodales enim egestas. Quisque ante velit,
                    eleifend in neque id, dapibus volutpat nisi. Suspendisse
                    potenti. Integer viverra feugiat massa, ut accumsan sapien
                    tincidunt sed. Nam laoreet erat scelerisque tempus
                    vulputate. Etiam a sagittis sem.
                  </p>
                </div>
              </div>
              <div className="col-span-12 mt-4">
                <div className="flex flex-col">
                  <p className="font-semibold">
                    Fine Print{" "}
                    <span className="text-[13px] text-[#cdcdcd]">
                      (Optional)
                    </span>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque quis accumsan turpis. Phasellus tincidunt neque
                    sed nunc mattis molestie. Praesent auctor metus sit amet
                    elit finibus, ac sodales enim egestas.
                  </p>
                </div>
              </div>
              <div className="col-span-12 mt-4">
                <p className="font-semibold">Pricing Model</p>
                <p>Hourly Rate</p>
              </div>
              <div className="col-span-12 mt-4">
                <p className="font-semibold">Hourly Rate</p>
                <p>$25/hour</p>
              </div>
              <div className="col-span-12 mt-4">
                <p className="font-semibold">Discount </p>
                <p>10%</p>
              </div>
              <div className="col-span-12 mt-4">
                <p className="font-semibold">Service Locations</p>
                <p>Locations 01</p>
                <p>Locations 02</p>
                <p>Locations 03</p>
              </div>
              <div className="col-span-12 mt-4">
                <p className="font-semibold">Service Location & Coverage</p>
                <p>6 Miles</p>
              </div>
              <div className="col-span-12 md:col-span-9 mt-4">
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
              <div className="col-span-12 mt-4">
                <p className="font-semibold">Select Days</p>
                <p>Selected days</p>
              </div>
              <div className="col-span-12 mt-4">
                <p className="font-semibold">What Hours are your Available?</p>
                <p>
                  9:00 PM <span className="font-semibold">To</span> 9:00 PM
                </p>
              </div>
              <div className="col-span-12 mt-4">
                <div className="file-actions mt-4">
                  <div className="file-info flex items-center justify-between border rounded-lg p-2">
                    <div className="flex items-center">
                      <img src={fileicon} alt="fileicon" className="w-[20px]" />
                      <div className="file-details ml-2">
                        <p className="file-name text-sm font-medium">
                          filename
                        </p>
                      </div>
                      <p className="show-preview text-[#0F91D2] mt-2 ms-8 cursor-pointer">
                        Show Preview
                      </p>
                    </div>
                    <div className="flex px-4">
                      <p className="file-size text-xs me-2 text-gray-500">
                        0.9 MB
                      </p>
                      <button className="remove-file text-red-500 font-bold text-xs">
                        ✖
                      </button>
                    </div>
                  </div>

                  {/* Show Preview Button */}
                </div>
              </div>
              <div className="col-span-12">
                <div className="file-actions mt-4">
                  <div className="file-info flex items-center justify-between border rounded-lg p-2">
                    <div className="flex items-center">
                      <img src={fileicon} alt="fileicon" className="w-[20px]" />
                      <div className="file-details ml-2">
                        <p className="file-name text-sm font-medium">
                          filename
                        </p>
                      </div>
                      <p className="show-preview text-[#0F91D2] mt-2 ms-8 cursor-pointer">
                        Show Preview
                      </p>
                    </div>
                    <div className="flex px-4">
                      <p className="file-size text-xs me-2 text-gray-500">
                        0.9 MB
                      </p>
                      <button className="remove-file text-red-500 font-bold text-xs">
                        ✖
                      </button>
                    </div>
                  </div>

                  {/* Show Preview Button */}
                </div>
              </div>
              <div className="col-span-12">
                <div className="file-actions mt-4">
                  <div className="file-info flex items-center justify-between border rounded-lg p-2">
                    <div className="flex items-center">
                      <img src={fileicon} alt="fileicon" className="w-[20px]" />
                      <div className="file-details ml-2">
                        <p className="file-name text-sm font-medium">
                          filename
                        </p>
                      </div>
                      <p className="show-preview text-[#0F91D2] mt-2 ms-8 cursor-pointer">
                        Show Preview
                      </p>
                    </div>
                    <div className="flex px-4">
                      <p className="file-size text-xs me-2 text-gray-500">
                        0.9 MB
                      </p>
                      <button className="remove-file text-red-500 font-bold text-xs">
                        ✖
                      </button>
                    </div>
                  </div>

                  {/* Show Preview Button */}
                </div>
              </div>
              <div className="col-span-12 mt-4">
                <div className="flex justify-end">
                  <button
                    type="reset"
                    className="border border-[#cdcdcd] rounded-lg w-[150px] py-[10px] me-4 font-semibold bg-[#ffffff]"
                  >
                    {" "}
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="border border-[#0F91D2] rounded-lg w-[150px] py-[10px] text-[#ffffff] font-semibold bg-[#0F91D2]"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </TabPanel>
      </Box>
    </div>
  );
}

export default NewDeals;
