import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function TabPanel(props) {
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function NewDeals() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            aria-label="simple tabs example"
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
              <div className="col-span-12 md:col-span-7 mt-4">
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
              <div className="col-span-12 md:col-span-7 mt-4">
                <p className="font-semibold">Service Type</p>
                <div className="flex mt-4">
                  <div className="flex">
                    <input
                      type="radio"
                      id="Commercial"
                      name="type"
                      className="myinput me-4"
                    />
                    <label htmlFor="Commercial">Commercial</label>
                  </div>
                  <div className="flex ms-8">
                    <input
                      type="radio"
                      id="Residential"
                      name="type"
                      className="myinput me-4"
                    />
                    <label htmlFor="Residential">Residential</label>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-7 mt-4">
                <div className="flex flex-col">
                  <label htmlFor="Category" className="font-semibold">
                    Service Category
                  </label>
                  <select
                    name=""
                    id="Category"
                    className="myselect pe-[30px] focus-none"
                  >
                    <option value="">Category 1</option>
                    <option value="">Category 2</option>
                    <option value="">Category 3</option>
                    <option value="">Category 4</option>
                  </select>
                </div>
              </div>
              <div className="col-span-12 md:col-span-7 mt-4">
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
          <form action="#">
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-10 mt-4">
                <p className="font-semibold">Pricing Model</p>
                <div className="flex justify-between mt-4">
                  <div className="flex ">
                    <input
                      type="radio"
                      id="Flat"
                      name="Rate"
                      className="myinput me-4"
                    />
                    <label htmlFor="Flat">Flat Rate</label>
                  </div>
                  <div className="flex ms-8">
                    <input
                      type="radio"
                      id="Hourly"
                      name="Rate"
                      className="myinput me-4"
                    />
                    <label htmlFor="Hourly">Hourly Rate</label>
                  </div>
                  <div className="flex ms-8">
                    <input
                      type="radio"
                      id="Package"
                      name="Rate"
                      className="myinput me-4"
                    />
                    <label htmlFor="Package">Custom Package</label>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-7 mt-4">
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
              <div className="col-span-12 md:col-span-7 mt-4">
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
              <div className="col-span-12 md:col-span-7 mt-4">
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
              <div className="col-span-12 md:col-span-7 mt-4">
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
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
      </Box>
    </div>
  );
}

export default NewDeals;
