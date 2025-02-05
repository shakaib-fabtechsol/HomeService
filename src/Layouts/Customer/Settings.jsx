import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Facebook from "../../assets/img/Facebook-icon.png";
import Youtube from "../../assets/img/Youtube-icon.png";
import Twitter from "../../assets/img/Twitter-icon.png";
import Instagram from "../../assets/img/Instagram-icon.png";
import Linkdin from "../../assets/img/Linkdin-icon.png";
import Business from "../../assets/img/Business-icon.png";
import twitter48px from "../../assets/img/twitter48px.png";
import { CiEdit, CiTrash } from "react-icons/ci";
import { Link } from "react-router";
import { InputLabel, MenuItem, Modal, Select } from "@mui/material";
import Payment from "../../Components/CustomerSetting/Payment";
import MyDetail from "../../Components/CustomerSetting/MyDetail";
import SocialProfile from "../../Components/CustomerSetting/SocialProfile";
import Password from "../../Components/CustomerSetting/Password";

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

  return (
    <div className="pmain">
      <div className="navv">
        <div className="flex items-center">
          <h2 className="text-2xl font-semibold">Settings</h2>
        </div>
        <p className="text-[#535862] mt-4">
          Track, manage and forecast your customers and orders.
        </p>
      </div>
      <div className="btm">
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
            <MyDetail />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <SocialProfile />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Password />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Payment />
          </TabPanel>
        </Box>
      </div>
    </div>
  );
}

export default Settings;
