// import React from "react";
import * as React from "react";
import service from "../../assets/img/service.png";
import google from "../../assets/img/google.png";
import logo from "../../assets/img/logo.png";
import { Link, useLocation } from "react-router";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { FormControl, FormHelperText } from "@mui/material";
function Signup() {
  React.useEffect(() => {
    document.title = "Signup";
  }, []);

  const location = useLocation();
  const userType = location.state?.userType || "1";

  const [phone, setPhone] = React.useState("");

  return (
    <div className="">
      <div className="w-full grid md:grid-cols-2 h-[100dvh] overflow-y-auto">
        <div className="overflow-y-auto scroll-0 min-h-[100dvh]">
          <div className="">
            <img
              src={logo}
              alt=""
              className="px-5 py-4 size-48 object-contain mx-auto"
            />
          </div>
          <div className="">
            <div className="flex flex-col justify-center">
              <div className="px-[15px] sm:px-[30px] lg:px-[50px] xl:px-[130px] py-4">
                <h2 className="font-semibold text-[#181D27] text-darkblue text-3xl">
                  Sign up
                </h2>
                <p className="font-normal myblack mt-2">
                  Welcome! Please enter your details.
                </p>

                <form action="/">
                  <div className="my-3">
                    <label
                      htmlFor="role"
                      className="myblack block w-full font-medium"
                    >
                      Role
                    </label>
                    <input
                      type="text"
                      id="role"
                      value={userType}
                      readOnly
                      placeholder="role"
                      className="mt-1 w-full border px-3 rounded-lg py-3 focus-none rounded-3"
                    />
                  </div>
                  <div className="my-3">
                    <label
                      htmlFor="name"
                      className="myblack block w-full font-medium"
                    >
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      className="mt-1 w-full border px-3 rounded-lg py-3 focus-none rounded-3"
                    />
                  </div>
                  <div className="my-3">
                    <label
                      htmlFor="email"
                      className="myblack block w-full font-medium"
                    >
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="user123@gmail.com"
                      className="mt-1 w-full border px-3 rounded-lg py-3 focus-none rounded-3"
                    />
                  </div>
                  <div className="my-3">
                    <FormControl fullWidth>
                      <label
                        htmlFor="phone"
                        className="myblack block w-full font-medium"
                      >
                        Phone*
                      </label>
                      <PhoneInput
                        country={"pk"} // Default country (Pakistan)
                        value={phone}
                        onChange={(phone) => setPhone(phone)}
                        inputStyle={{
                          width: "calc(100% - 55px)",
                          marginLeft: "55px",
                          height: "48px",
                          padding: "10px",
                          borderRadius: "8px",
                          border: "1px solid #e5e7eb",
                        }}
                        buttonStyle={{
                          width: "60px", // Adjust the flag area width
                          borderRadius: "8px 0 0 8px",
                          background: "#fff",
                          border: "1px solid #e5e7eb",
                        }}
                      />
                    </FormControl>
                  </div>
                  <div className="my-3">
                    <label
                      htmlFor="password"
                      className="myblack block w-full font-medium"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder=""
                      className="mt-1 w-full border px-3 rounded-lg py-3 focus-none rounded-3"
                    />
                    <FormHelperText>
                      Must be at least 8 characters
                    </FormHelperText>
                  </div>
                  <Link
                    to="/PrivacyPolicy"
                    className="block underline text-blue mb-3"
                  >
                    Terms of service
                  </Link>
                  <button
                    type="submit"
                    className="text-white font-semibold px-3 py-3 bg-blue w-full mt-3 rounded-lg"
                  >
                    Create account
                  </button>
                </form>
                <Link
                  to="#"
                  className="border rounded-lg my-2 py-3 px-3 sm:px-3 flex justify-center items-center"
                >
                  <div className="flex ">
                    <img src={google} alt="goggle" className="me-2" />
                    <span className="font-semibold text-xs sm:text-base">
                      Sign up with Google
                    </span>
                  </div>
                </Link>
                <p className="text-center block mt-5">
                  Already have an account?{" "}
                  <Link to="/" className="text-blue font-semibold">
                    Login
                  </Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src={service}
            alt=""
            className="w-full h-[100dvh] object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;
