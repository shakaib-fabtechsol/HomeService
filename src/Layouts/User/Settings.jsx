import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SettingsPreview from "../../Components/MUI/SettingsPreview";
import Facebook from "../../assets/img/Facebook-icon.png";
import Youtube from "../../assets/img/Youtube-icon.png";
import Twitter from "../../assets/img/Twitter-icon.png";
import Instagram from "../../assets/img/Instagram-icon.png";
import Linkdin from "../../assets/img/Linkdin-icon.png";
import Business from "../../assets/img/Business-icon.png";
import visa from "../../assets/img/visa.png";
import mastercard from "../../assets/img/mastercard.png";
import { CiEdit, CiTrash } from "react-icons/ci";
import { Link } from "react-router";
import { InputLabel, MenuItem, Modal, Select } from "@mui/material";

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

  const [method, setMethod] = React.useState("mastercard");

  const handlemethod = (event) => {
    setMethod(event.target.value);
  };

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

  const paymentmethod = [
    {
      name: "Visa",
      avatar: visa,
      expdate: "Exp. date 06/2025",
    },
    {
      name: "mastercard",
      avatar: mastercard,
      expdate: "Exp. date 06/2025",
    },
  ];

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "10px",
    maxWidth: "700px",
    width: "100%",
  };
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            <Tab label="Social Profiles" />
            <Tab label="Password" />
            <Tab label="Payment/Payout Info" />
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
              <div className="grid sm:grid-cols-3 gap-2 py-8 border-b">
                <div>
                  <label className="text-sm font-semibold" htmlFor="Location">
                    Location
                  </label>
                </div>
                <div className="sm:col-span-2">
                  <input
                    className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                    defaultValue={"USA, New York, 823"}
                    type="text"
                    name="Location"
                    id="Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
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
                        <Link to="">
                          {" "}
                          <CiTrash className="text-[24px]" />
                        </Link>
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
        <TabPanel value={value} index={2}>
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
        <TabPanel value={value} index={3}>
          <div>
            <div className="flex justify-between border-b border-[#E9EAEB] pb-5 items-center flex-wrap gap-4">
              <div>
                <p className="text-lg font-semibold text-[#181D27]">
                  Payment method
                </p>
                <p className="text-[#535862] text-sm">
                  Update and add your payment methods.
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
            <div className="flex flex-wrap gap-3 items-center ms-auto justify-end mt-4">
              <button
                onClick={handleOpen}
                className="text-[#ffffff] font-semibold text-sm border border-[#0F91D2] shadow-[0px 1px_2px_0px_#0A0D120D] bg-[#0F91D2] rounded-[8px] py-3 px-4"
              >
                Add New
              </button>
            </div>
            <div>
              {paymentmethod.map((method, index) => (
                <div key={index} className="py-5 border-b border-[#E9EAEB]">
                  <div className="flex items-center justify-between py-3 px-4 bg-[#FAFAFA] min-h-[60px] rounded-[8px]">
                    <div className="flex gap-3 items-center">
                      <img
                        className="size-6 max-w-6"
                        src={method.avatar}
                        alt=""
                      />
                      <div>
                        <p className="font-medium text-[#343434]">
                          {method.name}
                        </p>
                        {method.expdate && (
                          <p className="text-[#535862] text-sm">
                            {method.expdate}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex">
                      <Link to="">
                        {" "}
                        <CiEdit className="text-[24px] me-2" />
                      </Link>
                      <Link to="">
                        {" "}
                        <CiTrash className="text-[24px]" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <div className="p-4">
                    <p className="text-lg font-semibold text-[#181D27]">
                      Payment method
                    </p>
                    <p className="text-[#535862] text-sm">
                      Update your card details.
                    </p>
                    <form action="">
                      <div className="mt-4">
                        <div>
                          <label className="text-sm font-semibold">
                            Select Payment Method
                          </label>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={method}
                            onChange={handlemethod}
                            sx={{ width: "100%" }}
                          >
                            <MenuItem value={"mastercard"}>
                              <div className="flex">
                                <img
                                  src={mastercard}
                                  alt=""
                                  className="me-2 w-[35px]"
                                />
                                <p>Mastercard</p>
                              </div>
                            </MenuItem>
                            <MenuItem value={"visa"}>
                              <div className="flex">
                                <img
                                  src={visa}
                                  alt=""
                                  className="me-2 w-[35px]"
                                />
                                <p>Visa</p>
                              </div>
                            </MenuItem>
                          </Select>
                        </div>
                        <div className="mt-4">
                          <label
                            className="text-sm font-semibold"
                            htmlFor="fnamec"
                          >
                            Name on card
                          </label>
                          <input
                            className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                            placeholder="Name Here"
                            type="text"
                            name="fnamec"
                            id="fnamec"
                          />
                        </div>
                        <div className="mt-4">
                          <label
                            className="text-sm font-semibold"
                            htmlFor="numberc"
                          >
                            Card number
                          </label>
                          <input
                            className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                            placeholder="Card number"
                            type="number"
                            name="numberc"
                            id="numberc"
                          />
                        </div>
                        <div className="flex justify-between mt-4"> 
                          <div>
                            <label
                              className="text-sm font-semibold"
                              htmlFor="cvv"
                            >
                              CVV
                            </label>
                            <input
                              className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                              placeholder="CVV"
                              type="number"
                              name="cvv"
                              id="cvv"
                            />
                          </div>
                          <div>
                            <label
                              className="text-sm font-semibold"
                              htmlFor="exp"
                            >
                              Expiry
                            </label>
                            <input
                              className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                              placeholder="Expiry"
                              type="date"
                              name="exp"
                              id="exp"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="flex flex-wrap gap-3 items-center ms-auto justify-end mt-4">
                      <button
                        onClick={handleClose}
                        className="text-[#414651] font-semibold text-sm border border-[#D5D7DA] shadow-[0px 1px_2px_0px_#0A0D120D] bg-[#FFFFFF] rounded-[8px] py-3 px-4"
                      >
                        Cancel
                      </button>
                      <button className="text-[#ffffff] font-semibold text-sm border border-[#0F91D2] shadow-[0px 1px_2px_0px_#0A0D120D] bg-[#0F91D2] rounded-[8px] py-3 px-4">
                        Save
                      </button>
                    </div>
                  </div>
                </Box>
              </Modal>
            </div>
          </div>
        </TabPanel>
      </Box>
    </div>
  );
}

export default Settings;
