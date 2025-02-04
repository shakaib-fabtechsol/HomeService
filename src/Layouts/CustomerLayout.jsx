import * as React from "react";
import {
  Box,
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  List,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  MdOutlineMessage,
  MdOutlineSupport,
  MdHomeRepairService,
  MdLogout,
} from "react-icons/md";
import { IoMdNotificationsOutline, IoIosSettings } from "react-icons/io";
import { Outlet, NavLink, Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import user from "../assets/img/user.png";

const drawerWidth = 240;

function CustomerLayout() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const topItems = [
    {
      text: "Explore Services",
      icon: <MdHomeRepairService className="text-2xl" />,
      link: "/customer/services",
    },
  ];

  const bottomItems = [
    {
      text: "Support",
      icon: <MdOutlineSupport className="text-2xl" />,
      link: "/customer/support",
    },
    {
      text: "Settings",
      icon: <IoIosSettings className="text-2xl" />,
      link: "/customer/settings",
    },
  ];
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account.",
      icon: "warning",
      showCancelButton: false,
      confirmButtonColor: "#0F91D2",
      confirmButtonText: "Yes, log me out!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        navigate("/");
      }
    });
  };
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
          <img src={logo} alt="logo" className="w-[120px]"/>
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

      {/* Bottom Section: Other Links */}
      <Box>
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
            <Link to="/customer/ProfileDetails">
              <img
                src={user}
                alt="logo"
                className="rounded-full pe-2 max-w-[70px]"
              />
            </Link>
            <Box>
              <Box className="flex justify-between items-center">
                <p className="font-bold">Mike Bird</p>
                <button onClick={handleLogout}>
                  <MdLogout className="text-2xl" />
                </button>
              </Box>
              <p className="mb-0 text-sm">mikebird@untitledui.com</p>
            </Box>
          </div>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "transparent",
          color: "#181D27",
          boxShadow: "none",
          display: { sm: "none" },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              position: "absolute",
              right: 16,
              top: 18,
              display: { sm: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar> */}
      {/* Sidebar for Desktop */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        {/* Drawer for Desktop */}
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
        {/* Drawer for Mobile */}
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
      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {/* <Toolbar /> */}
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <div className="pb-2 flex justify-end">
            <button onClick={handleDrawerToggle}>
              <MenuIcon />
            </button>
          </div>
        </Box>
        <Outlet />
      </Box>
    </Box>
  );
}

export default CustomerLayout;
