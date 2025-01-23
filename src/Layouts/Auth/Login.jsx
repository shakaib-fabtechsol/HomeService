// import React from "react";
import * as React from "react";
import Dr from "../../assets/img/Dr.png";
import logo from "../../assets/img/logo.png";
import dricon from "../../assets/img/dr-icon.png";
import { Link } from "react-router";
import { IoMail } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

function Login() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 5,
    borderRadius: "8px",
  };

  return (
    <div className="">
      <div className="w-full grid md:grid-cols-2 h-[100dvh] overflow-y-auto">
        <div className="hidden md:block">
          <img
            src={Dr}
            alt=""
            className="w-full h-[100dvh] object-cover object-top"
          />
          <div className="absolute top-[26px] left-[30px]">
            <img src={logo} alt="" className="max-w-[260px]" />
          </div>
          <div className="absolute top-[50%] flex flex-col items-center w-2/4">
            <div>
              <p className="font-bold text-3xl lg:text-4xl px-3 text-white">
                Welcome to WiseHealth
              </p>
              <p className="font-medium  px-3 text-white">
                Your 24/7 Personal Health Expert.
              </p>
            </div>
          </div>
        </div>
        <div className=" min-h-[100dvh] flex flex-col justify-center">
          <div className="overflow-y-auto">
            <div className="px-[15px] sm:px-[30px] lg:px-[50px] xl:px-[80px] py-4">
              <div className="flex justify-center md:hidden top-[26px] mb-5 left-[30px]">
                <img src={logo} alt="" className="max-w-[200px]" />
              </div>
              <h2 className="font-bold text-darkblue text-3xl">Login</h2>
              <p className="font-medium myblack mt-2">
                Sign in to continue into the system.
              </p>
              <form action="">
                <div className="my-3">
                  <label
                    htmlFor="email"
                    className="myblack block w-full font-semibold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="user123@gmail.com"
                    className="mt-1 w-full border px-3 py-2 rounded-lg py-3 focus-none rounded-3"
                  />
                </div>
                <div className="my-3">
                  <label
                    htmlFor="password"
                    className="myblack block w-full font-semibold"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder=""
                    className="mt-1 w-full border px-3 py-2 rounded-lg py-3 focus-none rounded-3"
                  />
                </div>
                <Link to="#" className="text-end block text-blue mb-3">
                  Forget Password?
                </Link>
                <button
                  type="button"
                  onClick={handleOpen}
                  className="text-white px-3 py-3 bg-blue w-full mt-4 rounded-lg"
                >
                  Login
                </button>
              </form>
              <p className="text-center block mt-3 ">
                Don't have an account ?{" "}
                <Link to="/register" className="text-blue">
                  Register
                </Link>{" "}
              </p>
              <p className="text-center block my-4 font-semibold text-3xl">
                OR
              </p>
              <Link
                to="#"
                className="border rounded-lg my-2 py-3 px-3 sm:px-3 flex justify-center items-center"
              >
                <div className="min-w-[245px] sm:min-w-[300px] flex ">
                  <IoMail className="me-2 text-blue sm:text-xl text-lg" />
                  <span className="font-semibold text-xs sm:text-base">
                    Continue with your email
                  </span>
                </div>
              </Link>
              <Link
                to="#"
                className="border rounded-lg my-2 py-3 px-3 sm:px-3 flex justify-center items-center"
              >
                <div className="min-w-[245px] sm:min-w-[300px] flex ">
                  <FaGoogle className="me-2 text-blue sm:text-xl text-lg" />
                  <span className="font-semibold text-xs sm:text-base">
                    Continue with Google Account
                  </span>
                </div>
              </Link>
              <Link
                to="#"
                className="border rounded-lg my-2 py-3 px-3 sm:px-3 flex justify-center items-center"
              >
                <div className="min-w-[245px] sm:min-w-[300px] flex ">
                  <FaApple className="me-2 text-blue sm:text-xl text-lg" />
                  <span className="font-semibold text-xs sm:text-base">
                    Continue with Apple Account
                  </span>
                </div>
              </Link>
              <Link
                to="#"
                className="border rounded-lg my-2 py-3 px-3 sm:px-3 flex justify-center items-center"
              >
                <div className="min-w-[245px] sm:min-w-[300px] flex ">
                  <FaFacebook className="me-2 text-blue sm:text-xl text-lg" />
                  <span className="font-semibold text-xs sm:text-base">
                    Continue with Facebook Account
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="px-3">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className=" w-full max-w-[290px] sm:max-w-[500px]">
            <div className="flex justify-center">
              <img src={dricon} alt="" />
            </div>
            <p className="text-blue text-xl font-semibold text-center mt-5">
              Congratulations!
            </p>
            <p className="text-lg font-medium text-center mt-5">
              You are successfully login into the system!
            </p>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default Login;
