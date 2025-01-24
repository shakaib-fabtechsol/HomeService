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
      <p className="text-[#535862] mt-4 ms-8">Create, manage, and organize your deals effortlessly.</p>
      <Box sx={{ width: "100%", typography: "body1", marginTop:'20px' }}>
        <Box>
          <Tabs
            TabIndicatorProps={{ sx: { display: "none" } }}
            sx={{
              "& .MuiTab-root": {
                color: "#717680",
                fontWeight: "600",
                fontFamily:'inter',
              },
              "& .Mui-selected": {
                color: "#0F91D2 !important",
                borderBottom: "solid 4px #0F91D2",
                fontFamily:'inter',
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
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
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
