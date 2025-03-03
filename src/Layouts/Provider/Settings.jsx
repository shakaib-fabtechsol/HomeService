import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MyDetail from "../../Components/ProviderSetting/MyDetail";
import Location from "../../Components/ProviderSetting/Location";
import BusinessProfile from "../../Components/ProviderSetting/BusinessProfile";
import CertificationHour from "../../Components/ProviderSetting/CertificationHour";
import AdditionalPhoto from "../../Components/ProviderSetting/AdditionalPhoto";
import SocialProfile from "../../Components/ProviderSetting/SocialProfile";
import Password from "../../Components/ProviderSetting/Password";
import Publish from "../../Components/ProviderSetting/PublishData";
import ChannelConversation from "../../Components/ProviderSetting/ChannelConversation";

import Payment from "../../Components/ProviderSetting/Payment";
import Loader from "../../Components/MUI/Loader";

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
  const [loading, setLoading] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="pmain">
      <div className="navv">
        <div className="flex items-center">
          <h2 className="text-2xl font-semibold">Settings</h2>
        </div>
        <p className="text-[#535862] mt-4">
          Update all your general settings including: business, personal, and
          payment settings.
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
              <Tab label="Personal Profile" />
              {/* <Tab label="Service Area" /> */}
              <Tab label="Business Profile " />
              <Tab label="Certifications & Hours" />
              <Tab label="Additional Info" />
              <Tab label="Social Profiles" />
              {/* <Tab label="Password" />
              <Tab label="Channels for Conversations" /> */}
              <Tab label="Passwords" />
              <Tab label="Publish" />
            </Tabs>
          </Box>

          {loading ? (
            <Loader />
          ) : (
            <>
              <TabPanel value={value} index={0}>
                <MyDetail />
              </TabPanel>
              {/* <TabPanel value={value} index={1}>
                <Location />
              </TabPanel> */}
              <TabPanel value={value} index={1}>
                <BusinessProfile />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <CertificationHour />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <AdditionalPhoto />
              </TabPanel>
              <TabPanel value={value} index={4}>
                <SocialProfile />
              </TabPanel>
              <TabPanel value={value} index={5}>
                <Password />
              </TabPanel>
              {/* <TabPanel value={value} index={7}>
                <ChannelConversation />
              </TabPanel> */}
              {/* <TabPanel value={value} index={8}>
                <Payment />
              </TabPanel> */}
              <TabPanel value={value} index={6}>
                <Publish />
              </TabPanel>
            </>
          )}
        </Box>
      </div>
    </div>
  );
}

export default Settings;
