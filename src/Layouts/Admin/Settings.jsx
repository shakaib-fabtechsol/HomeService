import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
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
            scrollButtons="auto" // Shows scroll buttons only when needed
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
          1
        </TabPanel>
        <TabPanel value={value} index={1}>
          2
        </TabPanel>
        <TabPanel value={value} index={2}>
          3
        </TabPanel>
        <TabPanel value={value} index={3}>
          4
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
                  {" "}
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
          6
        </TabPanel>
        <TabPanel value={value} index={6}>
          7
        </TabPanel>
        <TabPanel value={value} index={7}>
        <div>
            <div className="flex flex-col lg:flex-row items-center border-b pb-4 justify-between mt-4">
              <div className="">
                <h2 className="font-bold text-xl myhead">
                  Password
                </h2>
                <p className="myblack">update your account password</p>
              </div>
              <div className="flex justify-end mt-3 lg:mt-0">
                <button
                  type="reset"
                  className="border border-[#cdcdcd] rounded-lg w-[100px] sm:w-[150px] py-[10px] me-4 font-semibold bg-[#ffffff]"
                >
                  {" "}
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
                    placeholder="Muhammad Hussnain"
                    className="myinput focus-none w-full"
                  />
                </div>
              </div>
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
                    placeholder="Muhammad Hussnain"
                    className="myinput focus-none w-full"
                  />
                </div>
              </div>
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
                    placeholder="Muhammad Hussnain"
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
                  {" "}
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
                    <p className="font-semibold me-2">
                    Call Pro
                    </p>
                    <label class="switch def-switch">
                      <input type="checkbox" checked />
                      <span class="slider round"></span>
                    </label>
                  </div>
                  <p className="mt-3">
                    Enable the toggle to make your phone number visible to the public. Each time a customer (only one time per customer) uses this channel will incur a charge of $xxx. This charge is waived if your average deal revenue is above $xxx for the past 60 day period.
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
                    <p className="font-semibold me-2">
                    Call Pro
                    </p>
                    <label class="switch def-switch">
                      <input type="checkbox" checked />
                      <span class="slider round"></span>
                    </label>
                  </div>
                  <p className="mt-3">
                    Enable the toggle to make your phone number visible to the public. Each time a customer (only one time per customer) uses this channel will incur a charge of $xxx. This charge is waived if your average deal revenue is above $xxx for the past 60 day period.
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
                    <p className="font-semibold me-2">
                    Text Pro
                    </p>
                    <label class="switch def-switch">
                      <input type="checkbox" checked />
                      <span class="slider round"></span>
                    </label>
                  </div>
                  <p className="mt-3">
                  Enable the toggle to make your text number visible to the public. Each time a customer (only one time per customer) uses this channel will incur a charge of $xxx. This charge is waived if your average deal revenue is above $xxx for the past 60 day period.
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
                    <p className="font-semibold me-2">
                    Instant Chat
                    </p>
                    <label class="switch def-switch">
                      <input type="checkbox" checked />
                      <span class="slider round"></span>
                    </label>
                  </div>
                  <p className="mt-3">
                  Enable the toggle to make your instant chat visible to the public. Each time a customer (only one time per customer) uses this channel will incur a charge of $xxx. This charge is waived if your average deal revenue is above $xxx for the past 60 day period.
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
                    <p className="font-semibold me-2">
                  Email Pro
                    </p>
                    <label class="switch def-switch">
                      <input type="checkbox" checked />
                      <span class="slider round"></span>
                    </label>
                  </div>
                  <p className="mt-3">
                  Enable the toggle to make your email address visible to the public. Each time a customer (only one time per customer) uses this channel will incur a charge of $xxx. This charge is waived if your average deal revenue is above $xxx for the past 60 day period.
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
                    <p className="font-semibold me-2">
                   Direct Form
                    </p>
                    <label class="switch def-switch">
                      <input type="checkbox" checked />
                      <span class="slider round"></span>
                    </label>
                  </div>
                  <p className="mt-3">
                  Enable the toggle to make your direct form visible to the public. Each time a customer (only one time per customer) uses this channel will incur a charge of $xxx. This charge is waived if your average deal revenue is above $xxx for the past 60 day period.
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
                    <p className="font-semibold me-2">
                   Address
                    </p>
                    <label class="switch def-switch">
                      <input type="checkbox" checked />
                      <span class="slider round"></span>
                    </label>
                  </div>
                  <p className="mt-3">
                  Enable the toggle to make your address visible to the public. 
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
