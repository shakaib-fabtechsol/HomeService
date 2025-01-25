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
            variant="scrollable" // Enables scrolling
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
          5
        </TabPanel>
        <TabPanel value={value} index={5}>
          6
        </TabPanel>
        <TabPanel value={value} index={6}>
          7
        </TabPanel>
        <TabPanel value={value} index={7}>
          8
        </TabPanel>
        <TabPanel value={value} index={8}>
          9
        </TabPanel>
      </Box>
    </div>
  );
}

export default Settings;
