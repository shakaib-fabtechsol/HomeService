import * as React from "react";
import { useEffect, useState } from "react";
import { Box, Drawer, CssBaseline, List } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo1 from "../assets/img/Business-icon.png";
import {
  MdOutlineSupport,
  MdHomeRepairService,
  MdLogout,
} from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { Outlet, NavLink, Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../assets/img/logo.png";

import axios from "axios";
import { toast } from "react-toastify";

const drawerWidth = 220;

function ProviderLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("id");

      if (!token) {
        toast.error("No token found. Redirecting to login...");
        navigate("/login"); // Redirect to login
        return;
      }

      if (!userId) {
        toast.error("User ID not found. Please log in.");
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get(
          `https://homeservice.thefabulousshow.com/api/UserDetails/${userId}`,
          {
            headers: { Authorization: `Bearer ${token}` }, // Include token if needed
          }
        );
        setUserData(response.data?.user);
      } catch (err) {
        console.error("Error fetching user data:", err);
        toast.error("Failed to load user data.");
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account.",
      icon: "warning",
      confirmButtonColor: "#0F91D2",
      confirmButtonText: "Yes, log me out!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        navigate("/");
      }
    });
  };

  const topItems = [
    {
      text: "My Services",
      icon: <MdHomeRepairService className="text-2xl" />,
      link: "/provider/services",
    },
  ];

  const bottomItems = [
    {
      text: "Settings",
      icon: <IoIosSettings className="text-2xl" />,
      link: "/provider/settings",
    },
    {
      text: "Support",
      icon: <MdOutlineSupport className="text-2xl" />,
      link: "/provider/support",
    },
  ];

  const imageUrl = userData?.personal_image
    ? `https://homeservice.thefabulousshow.com/uploads/${userData?.personal_image}`
    : null;

  const defaultimg = "/dummy.png";
  const imageToShow = imageUrl || defaultimg;
  const drawer = (
    <Box
      sx={{
        height: "100%",
        bgcolor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "inter",
      }}
    >
      <Box>
        <div className="flex justify-center py-3">
          <img src={logo} alt="logo" className="w-[60px] object-contain" />
        </div>
        <List>
          {topItems.map((item) => (
            <NavLink
              to={item.link}
              key={item.text}
              className={({ isActive }) =>
                `flex items-center text-lg py-2 mx-4 my-1 px-3 myblack ${
                  isActive ? "bg-[#E7F4FB] text-[#0F91D2] rounded-md" : ""
                }`
              }
            >
              <div className="me-2">{item.icon}</div>
              <p>{item.text}</p>
            </NavLink>
          ))}
        </List>
      </Box>

      <Box sx={{ fontFamily: "inter" }}>
        <List className="border-b-2">
          {bottomItems.map((item) => (
            <NavLink
              to={item.link}
              key={item.text}
              className={({ isActive }) =>
                `flex items-center text-lg py-2 mx-4 my-1 px-3 myblack ${
                  isActive ? "bg-[#E7F4FB] text-[#0F91D2] rounded-md" : ""
                }`
              }
            >
              <div className="me-2">{item.icon}</div>
              <p>{item.text}</p>
            </NavLink>
          ))}
        </List>
        <Box>
          <div className="flex items-center px-4 py-4">
            <Link to="/provider/ProfileDetails">
              <img
                src={imageToShow}
               
                className=" rounded-2xl w-100 h-100"
                alt="Profile"
              />
            </Link>

            <Box>
              <Box className="flex justify-between   items-center">
                <p className="font-bold ml-1 text-sm">
                  {userData?.name?.length > 15
                    ? `${userData?.name?.substring(0, 15)}...`
                    : userData?.name || "User Name"}
                </p>
                <button onClick={handleLogout}>
                  <MdLogout className="text-2xl" />
                </button>
              </Box>
              <p className="mb-0 ml-1 text-sm">
                {userData?.email || "user@example.com"}
              </p>
            </Box>
          </div>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          fontFamily: "inter",
        }}
      >
        <Drawer
          variant="permanent"
          open
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 1,
          width: { xs: "100%", sm: `calc(100% - ${drawerWidth}px)` },
          fontFamily: "inter",
        }}
      >
        <Box sx={{ display: { xs: "block", sm: "none" }, fontFamily: "inter" }}>
          <div className="pb-2 flex justify-end">
            <button className="absolute mt-2" onClick={handleDrawerToggle}>
              <MenuIcon />
            </button>
          </div>
        </Box>
        <Outlet />
      </Box>
    </Box>
  );
}

export default ProviderLayout;
